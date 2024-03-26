package com.triplec.api.domain.entities.publicKeys;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserOwnedCardId implements Serializable {
    private Integer user;

    private Integer card;
}