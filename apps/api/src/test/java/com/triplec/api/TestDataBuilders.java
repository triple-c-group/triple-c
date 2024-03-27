package com.triplec.api;

import com.triplec.api.domain.entities.BankEntity;
import com.triplec.api.domain.entities.CreditCardEntity;
import com.triplec.api.domain.entities.LifestyleEntity;

import java.util.List;

public class TestDataBuilders {
    public static BankEntity buildBankA(){
        return BankEntity.builder()
                .bankId("1")
                .bankName("Citibank")
                .bankWebsite("https://citibank.co.th")
                .build();
    }

    public static BankEntity buildBankB(){
        return BankEntity.builder()
                .bankId("3")
                .bankName("Krungthai (KTC)")
                .bankWebsite("https://ktc.co.th")
                .build();
    }

    public static LifestyleEntity buildLifestyleA(){
        return LifestyleEntity.builder()
                .lifestyleId(1)
                .lifestyleName("First Jobber")
                .lifestyleDescription("Test Description")
                .lifestyleIconUrl("https://picsum.photos/200?q=first-jobber")
                .build();
    }

    public static LifestyleEntity buildLifestyleB(){
        return LifestyleEntity.builder()
                .lifestyleId(2)
                .lifestyleName("Shopping")
                .lifestyleDescription("Test Description")
                .lifestyleIconUrl("https://picsum.photos/200?q=shopping")
                .build();
    }
    public static CreditCardEntity buildCreditCardA(){
        return CreditCardEntity.builder()
                .cardId(1)
                .cardName("Citi Rewards Credit Card")
                .cardDescription("Test Description")
                .network("Mastercard")
                .bank(BankEntity.builder().bankId("1").build())
                .minimumIncome(15000)
                .minimumCreditScore(500)
                .minimumAge((byte) 20)
                .annualFee(3800)
                .interestRate((float) 16)
                .validityMonth(24)
                .cashbackPercentage((float) 0)
                .highlightBenefits("Sample Text")
                .welcomeOffer("Sample Text")
                .imageUrl("Sample URL")
                .additionalDetail("Sample Text")
                .officialDetailUrl("Sample URL")
                .affiliateApplicationUrl("Sample URL")
                .pointPerBaht(25)
                .lifestyles(List.of(
                        LifestyleEntity.builder().lifestyleId(1).build()
                ))
                .build();

    }
    public static CreditCardEntity buildCreditCardB(){
        return CreditCardEntity.builder()
                .cardId(9)
                .cardName("KTC VISA PLATINUM")
                .cardDescription("Test Description")
                .network("VISA")
                .bank(BankEntity.builder().bankId("3").build())
                .minimumIncome(30000)
                .minimumCreditScore(500)
                .minimumAge((byte) 20)
                .annualFee(0)
                .interestRate((float) 16)
                .validityMonth(24)
                .cashbackPercentage((float) 0)
                .highlightBenefits("Sample Text")
                .welcomeOffer("Sample Text")
                .imageUrl("Sample URL")
                .additionalDetail("Sample Text")
                .officialDetailUrl("Sample URL")
                .affiliateApplicationUrl("Sample URL")
                .pointPerBaht(25)
                .lifestyles(List.of(
                        LifestyleEntity.builder().lifestyleId(1).build(),
                        LifestyleEntity.builder().lifestyleId(2).build()
                ))
                .build();

    }
}
