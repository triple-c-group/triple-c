package com.triplec.api.services;

import com.triplec.api.domain.dto.CreditCardDto;
import com.triplec.api.domain.entities.LifestyleEntity;
import com.triplec.api.domain.entities.UserEntity;
import com.triplec.api.domain.entities.UserLifestyleEntity;
import com.triplec.api.domain.entities.publicKeys.UserLifestyleId;
import com.triplec.api.mappers.CreditCardMapper;
import com.triplec.api.repositories.CreditCardRepository;
import com.triplec.api.repositories.UserLifestyleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@Service
public class CreditCardService {
    @Autowired
    private CreditCardRepository creditCardRepository;

    @Autowired
    private CreditCardMapper creditCardMapper;

    @Autowired
    private UserLifestyleRepository userLifestyleRepository;

    public List<CreditCardDto> recommend(Optional<Integer> salary, Optional<List<String>> bankIds, Optional<List<Integer>> lifestyleIds, Optional<List<String>> networks, Optional<Integer> userId) {
//        userId.ifPresent((id) -> {
//            lifestyleIds.ifPresent(theLifeStyleIds -> {
//                List<UserLifestyleEntity> userLifestyleEntities = IntStream
//                        .range(0, theLifeStyleIds.size())
//                        .mapToObj(i -> new UserLifestyleEntity(
//                                UserEntity.builder().userId(id).build(),
//                                LifestyleEntity.builder().lifestyleId(theLifeStyleIds.get(i)).build(),
//                                (byte) i))
//                        .toList();
//                userLifestyleRepository.saveAll(userLifestyleEntities);
//            });
//
//        });
        return creditCardMapper.entitiesToDtos(creditCardRepository.filterByQueries(salary, bankIds, lifestyleIds, networks));
    }

    public Boolean exists(Integer cardId) {
        return creditCardRepository.existsById(cardId);
    }
}
