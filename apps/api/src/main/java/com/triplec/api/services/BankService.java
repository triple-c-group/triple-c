package com.triplec.api.services;

import com.triplec.api.domain.dto.BankDto;
import com.triplec.api.mappers.BankMapper;
import com.triplec.api.repositories.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {
    @Autowired
    private BankRepository bankRepository;

    @Autowired
    private BankMapper bankMapper;

    public List<BankDto> findAll(){
      return bankMapper.entitiesToDtos(bankRepository.findAll());
    }
}
