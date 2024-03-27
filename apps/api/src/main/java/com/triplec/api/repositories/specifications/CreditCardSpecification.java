package com.triplec.api.repositories.specifications;

import com.triplec.api.domain.entities.CreditCardEntity;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.NonNull;

public class CreditCardSpecification implements Specification<CreditCardEntity> {
    private SearchCriteria criteria;

    @Override
    public Predicate toPredicate(@NonNull Root<CreditCardEntity> root, @NonNull CriteriaQuery<?> query, @NonNull CriteriaBuilder criteriaBuilder) {
        if (criteria.getOperation().equalsIgnoreCase(">")) {
            return criteriaBuilder.greaterThanOrEqualTo(
                    root.get(criteria.getKey()), (Integer) criteria.getValue()
            );
        } else if (criteria.getOperation().equalsIgnoreCase("in")) {
            return root.get(criteria.getKey()).in(criteria.getValue());
        } else if (criteria.getOperation().equalsIgnoreCase("")){
            criteriaBuilder.isMember()
        }
        return null;
    }
}
