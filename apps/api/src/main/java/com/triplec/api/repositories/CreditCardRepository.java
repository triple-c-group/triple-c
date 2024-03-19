package com.triplec.api.repositories;

import com.triplec.api.domain.entities.CreditCardEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardRepository extends CrudRepository<CreditCardEntity, Integer> {
}
