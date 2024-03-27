package com.triplec.api.repositories.impl;

import com.triplec.api.domain.entities.CreditCardEntity;
import com.triplec.api.repositories.CreditCardRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
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
    public List<CreditCardEntity> filterByQuerys(Optional<Integer> salary, Optional<List<Integer>> bankIds, Optional<List<Integer>> lifestyleIds, Optional<List<Integer>> networkIds, Optional<Integer> userId) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<CreditCardEntity> cq = cb.createQuery(CreditCardEntity.class);

        Root<CreditCardEntity> card = cq.from(CreditCardEntity.class);
        List<Predicate> predicates = new ArrayList<>();

        salary.ifPresent(theSalary -> {
            predicates.add(cb.lessThanOrEqualTo(card.get("minimumIncome"), theSalary));
        });

        bankIds.ifPresent(theBankIds -> {
            predicates.add(card.get("bankId"))
        });

        cq.where(predicates.toArray(new Predicate[0]));
    }
}
