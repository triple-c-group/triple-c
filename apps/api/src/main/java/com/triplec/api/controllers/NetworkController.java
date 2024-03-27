package com.triplec.api.controllers;

import com.triplec.api.domain.RestResponse;
import com.triplec.api.domain.dto.NetworkDto;
import com.triplec.api.services.NetworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NetworkController {

    @Autowired
    private NetworkService networkService;

    @GetMapping(path = "/networks")
    public RestResponse<List<NetworkDto>> listNetworks(){
        return new RestResponse<>(networkService.findAll());
    }
}
