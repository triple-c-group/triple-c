package com.triplec.api.services;

import com.triplec.api.domain.dto.NetworkDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NetworkService {
    public List<NetworkDto> findAll(){
        NetworkDto[] networkArray = {
                new NetworkDto("VISA"),
                new NetworkDto("Mastercard")
        };
        return List.of(networkArray);
    }

}
