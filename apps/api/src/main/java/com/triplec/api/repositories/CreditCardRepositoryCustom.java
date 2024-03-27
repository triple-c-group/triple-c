package com.triplec.api.repositories;

import com.triplec.api.domain.entities.CreditCardEntity;

import java.util.List;
import java.util.Optional;

public interface CreditCardRepositoryCustom {
    List<CreditCardEntity> filterByQueries(
            Optional<Integer> salary,
            Optional<List<String>> bankIds,
            Optional<List<Integer>> lifestyleIds,
            Optional<List<String>> networks
    );
}
