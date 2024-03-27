package com.triplec.api.repositories;

import com.triplec.api.domain.entities.CreditCardEntity;

import java.util.List;
import java.util.Optional;

public interface CreditCardRepositoryCustom {
    List<CreditCardEntity> filterByQuerys(
            Optional<Integer> salary,
            Optional<List<Integer>> bankIds,
            Optional<List<Integer>> lifestyleIds,
            Optional<List<Integer>> networkIds,
            Optional<Integer> userId
    );
}
