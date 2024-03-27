package com.triplec.api.repositories;

import com.triplec.api.domain.entities.UserOwnedCardEntity;
import com.triplec.api.domain.entities.publicKeys.UserOwnedCardId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOwnedCardRepository extends CrudRepository<UserOwnedCardEntity, UserOwnedCardId> {
}
