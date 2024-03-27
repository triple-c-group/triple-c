package com.triplec.api.controllers;

import com.triplec.api.domain.RestResponse;
import com.triplec.api.domain.dto.LifestyleDto;
import com.triplec.api.services.LifestyleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LifestyleController {
    @Autowired
    private LifestyleService lifestyleService;

    @GetMapping(path = "/lifestyles")
    public RestResponse<List<LifestyleDto>> listLifestyles(){
        return new RestResponse<>(lifestyleService.findAll());
    }
}
