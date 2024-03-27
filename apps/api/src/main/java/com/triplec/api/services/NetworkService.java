package com.triplec.api.services;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NetworkService {
    public List<String> findAll(){
        String[] networkArray = {
                "VISA",
                "Mastercard"
        };
        return List.of(networkArray);
    }

}
