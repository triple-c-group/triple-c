package com.triplec.api.mappers;

import com.triplec.api.domain.dto.UserDto;
import com.triplec.api.domain.entities.UserEntity;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {
    UserDto entityToDto (UserEntity userEntity);

    UserEntity DtoToEntity (UserDto userDto);
}
