package com.triplec.api.repositories;

import com.triplec.api.domain.entities.NetworkEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NetworkRepository extends CrudRepository<NetworkEntity, String> {
}
