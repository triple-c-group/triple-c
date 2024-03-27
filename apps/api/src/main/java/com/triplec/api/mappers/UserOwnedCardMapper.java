package com.triplec.api.mappers;

import com.triplec.api.domain.dto.UserOwnedCardDto;
import com.triplec.api.domain.entities.UserOwnedCardEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserOwnedCardMapper {
    UserOwnedCardDto entityToDto(UserOwnedCardEntity userOwnedCardEntity);

    UserOwnedCardEntity DtoToEntity(UserOwnedCardDto userOwnedCardDto);

    List<UserOwnedCardDto> entitiesToDtos(List<UserOwnedCardEntity> userOwnedCardEntities);
}
