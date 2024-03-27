package com.triplec.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserOwnedCardDto {

    private String cardNickname;

    private Byte rating;

    private String comment;

    private LocalDate paymentDueDate;

    private Boolean acceptPromotionNotification;

    private Boolean acceptDueDateNotification;

    private CreditCardDto card;

}
