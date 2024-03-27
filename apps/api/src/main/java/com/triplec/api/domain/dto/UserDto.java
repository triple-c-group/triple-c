package com.triplec.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private Integer userId;

    private String lineId;

    private String email;

    private String phoneNumber;

    private String profilePictureUrl;
}
