package com.triplec.api.repositories.impl;

import com.triplec.api.domain.entities.CreditCardEntity;
import com.triplec.api.domain.entities.LifestyleEntity;
import com.triplec.api.repositories.CreditCardRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class CreditCardRepositoryCustomImpl implements CreditCardRepositoryCustom {

    EntityManager em;

    public CreditCardRepositoryCustomImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<CreditCardEntity> filterByQueries(Optional<Integer> salary, Optional<List<String>> bankIds, Optional<List<Integer>> lifestyleIds, Optional<List<String>> networks) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<CreditCardEntity> cq = cb.createQuery(CreditCardEntity.class);

        Root<CreditCardEntity> card = cq.from(CreditCardEntity.class);
        List<Predicate> predicates = new ArrayList<>();
        List<Predicate> lifestylePredicates = new ArrayList<>();

        salary.ifPresent(theSalary -> {
            predicates.add(cb.lessThanOrEqualTo(card.get("minimumIncome"), theSalary));
        });

        bankIds.ifPresent(theBankIds -> {
            predicates.add(card.get("bank").get("bankId").in(theBankIds));
        });

        lifestyleIds.ifPresent(theLifestyleIds -> {
            for (Integer lifestyleId : theLifestyleIds){
                Subquery<Integer> subquery = cq.subquery(Integer.class);
                Root<CreditCardEntity> subqueryCreditCard = subquery.from(CreditCardEntity.class);
                Join<LifestyleEntity, CreditCardEntity> subqueryLifestyle = subqueryCreditCard.join("lifestyles");

                subquery.select(subqueryCreditCard.get("cardId")).where(
                        cb.equal(subqueryLifestyle.get("lifestyleId"), lifestyleId)
                );

                lifestylePredicates.add(cb.in(card.get("cardId")).value(subquery));
            }
        });
        if (!lifestylePredicates.isEmpty()){
            predicates.add(cb.or(lifestylePredicates.toArray(new Predicate[0])));
        }

        networks.ifPresent(theNetworks -> {
            predicates.add(card.get("network").in(theNetworks));
        });

        cq.where(cb.and(predicates.toArray(new Predicate[0])));
        return em.createQuery(cq).getResultList();
    }
}
