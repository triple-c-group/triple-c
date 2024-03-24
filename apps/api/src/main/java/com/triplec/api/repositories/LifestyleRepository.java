package com.triplec.api.repositories;

import com.triplec.api.domain.entities.LifestyleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LifestyleRepository extends CrudRepository<LifestyleEntity, Integer> {
}
