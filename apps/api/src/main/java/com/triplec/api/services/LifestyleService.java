package com.triplec.api.services;

import com.triplec.api.domain.dto.LifestyleDto;
import com.triplec.api.mappers.LifestyleMapper;
import com.triplec.api.repositories.LifestyleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LifestyleService {

    @Autowired
    private LifestyleRepository lifestyleRepository;

    @Autowired
    private LifestyleMapper lifestyleMapper;

    public List<LifestyleDto> findAll(){
        return lifestyleMapper.entitiesToDtos(lifestyleRepository.findAll());
    }

}
