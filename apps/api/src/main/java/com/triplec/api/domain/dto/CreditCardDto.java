package com.triplec.api.domain.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreditCardDto {
    private Integer cardId;

    private String cardName;

    private String cardDescription;

    private String network;

    private BankDto bank;

    private Integer minimumIncome;

    private Integer minimumCreditScore;

    private Byte minimumAge;

    private Integer annualFee;

    private Float interestRate;

    private Integer validityMonth;

    private Float cashbackPercentage;

    private String highlightBenefits;

    private String welcomeOffer;

    private String imageUrl;

    private String additionalDetail;

    private String officialDetailUrl;

    private String affiliateApplicationUrl;

    private Integer pointPerBaht;

    private List<LifestyleDto> lifestyles;

}
