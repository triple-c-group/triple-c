package com.triplec.api.repositories;

import com.triplec.api.domain.entities.BankEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends CrudRepository<BankEntity, String> {
}
