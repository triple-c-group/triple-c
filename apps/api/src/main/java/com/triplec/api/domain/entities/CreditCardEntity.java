package com.triplec.api.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "credit_card")
public class CreditCardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Integer cardId;

    private String cardName;

    private String cardDescription;

    private String network;

    @ManyToOne
    @JoinColumn(name = "bank_id")
    private BankEntity bank;

    private Integer minimumIncome;

    private Integer minimumCreditScore;

    @Column(columnDefinition = "TINYINT")
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

    @ManyToMany
    @JoinTable(
            name = "card_lifestyle",
            joinColumns = @JoinColumn(name = "card_id"),
            inverseJoinColumns = @JoinColumn(name = "lifestyle_id")
    )
    private List<LifestyleEntity> lifestyles;
}
