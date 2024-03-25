package com.triplec.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LifestyleDto {
    private Integer lifestyleId;

    private String lifestyleName;

    private String lifestyleDescription;

    private String lifestyleIconUrl;
}
