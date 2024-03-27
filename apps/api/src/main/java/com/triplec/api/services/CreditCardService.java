package com.triplec.api.services;

import com.triplec.api.domain.dto.CreditCardDto;
import com.triplec.api.mappers.CreditCardMapper;
import com.triplec.api.repositories.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CreditCardService {
    @Autowired
    private CreditCardRepository creditCardRepository;

    @Autowired
    private CreditCardMapper creditCardMapper;

    public List<CreditCardDto> recommend(
            Optional<Integer> salary,
            Optional<List<Integer>> bankIds,
            Optional<List<Integer>> lifestyleIds,
            Optional<List<Integer>> networkIds,
            Optional<Integer> userId
    ){
        return null;
    }
}
