package com.triplec.api.mappers;

import com.triplec.api.domain.dto.LifestyleDto;
import com.triplec.api.domain.entities.LifestyleEntity;
import org.mapstruct.Mapper;

@Mapper
public interface LifestyleMapper {
    LifestyleDto entityToDto (LifestyleEntity lifestyleEntity);
}
