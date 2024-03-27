package com.triplec.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserLifestyleDto {
    private LifestyleDto lifestyle;

    private Byte lifestyleRank;
}
