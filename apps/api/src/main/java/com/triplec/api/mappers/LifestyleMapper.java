package com.triplec.api.mappers;

import com.triplec.api.domain.dto.LifestyleDto;
import com.triplec.api.domain.entities.LifestyleEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface LifestyleMapper {
    LifestyleDto entityToDto (LifestyleEntity lifestyleEntity);

    List<LifestyleDto> entitiesToDtos (Iterable<LifestyleEntity> lifestyleEntities);
}
