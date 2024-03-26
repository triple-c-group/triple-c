package com.triplec.api.controllers;

import com.triplec.api.domain.RestResponse;
import com.triplec.api.domain.dto.BankDto;
import com.triplec.api.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class BankController{
    @Autowired
    BankService bankService;

    @GetMapping(path = "/banks")
    public RestResponse<List<BankDto>> listBanks() {
        return new RestResponse<>(bankService.findAll());
    }

}
