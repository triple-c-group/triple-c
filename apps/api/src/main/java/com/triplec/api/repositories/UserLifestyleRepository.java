package com.triplec.api.repositories;

import com.triplec.api.domain.entities.UserLifestyleEntity;
import com.triplec.api.domain.entities.publicKeys.UserLifestyleId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLifestyleRepository extends CrudRepository<UserLifestyleEntity, UserLifestyleId> {
}
