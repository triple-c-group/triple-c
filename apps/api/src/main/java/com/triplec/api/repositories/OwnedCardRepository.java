package com.triplec.api.repositories;

import com.triplec.api.domain.entities.OwnedCardEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnedCardRepository extends CrudRepository<OwnedCardEntity, Integer> {
}
