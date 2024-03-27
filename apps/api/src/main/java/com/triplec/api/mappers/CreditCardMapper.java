package com.triplec.api.mappers;

import com.triplec.api.domain.dto.CreditCardDto;
import com.triplec.api.domain.entities.CreditCardEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface CreditCardMapper {

    CreditCardDto entityToDto (CreditCardEntity creditCardEntity);

    List<CreditCardDto> entitiesToDtos (Iterable<CreditCardEntity> creditCardEntities);
}
