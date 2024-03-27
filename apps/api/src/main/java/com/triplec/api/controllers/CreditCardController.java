package com.triplec.api.controllers;

import com.triplec.api.domain.RestResponse;
import com.triplec.api.domain.dto.CreditCardDto;
import com.triplec.api.services.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CreditCardController {
    @Autowired
    private CreditCardService creditCardService;

    @GetMapping(path = "/credit-cards")
    public RestResponse<List<CreditCardDto>> recommendCards(
            @RequestParam Optional<Integer> salary,
            @RequestParam Optional<List<String>> bankIds,
            @RequestParam Optional<List<Integer>> lifestyleIds,
            @RequestParam Optional<List<String>> networks,
            @RequestParam Optional<Integer> userId
    ){
        return new RestResponse<>(creditCardService.recommend(salary, bankIds, lifestyleIds, networks, userId));
    }
}
