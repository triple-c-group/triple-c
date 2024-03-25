package com.triplec.api.mappers;

import com.triplec.api.domain.dto.BankDto;
import com.triplec.api.domain.entities.BankEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface BankMapper {

    BankDto entityToDto (BankEntity bankEntity);

    List<BankDto> entitiesToDtos (Iterable<BankEntity> bankEntities);

}
