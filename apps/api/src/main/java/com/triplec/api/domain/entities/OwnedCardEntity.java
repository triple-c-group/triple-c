package com.triplec.api.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "owned_card")
@IdClass(OwnedCardPK.class)
public class OwnedCardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ownedCardId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    private String ownedCardName;

    @Column(columnDefinition = "TINYINT")
    private Byte rating;

    private String comment;

    private LocalDate paymentDueDate;

    private Boolean acceptPromotionNotification;

    private Boolean acceptDueDateNotification;

    @ManyToOne
    @Id
    @JoinColumn(name = "card_id")
    private CreditCardEntity card;


}
