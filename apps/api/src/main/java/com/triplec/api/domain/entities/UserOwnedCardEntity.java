package com.triplec.api.domain.entities;

import com.triplec.api.domain.entities.publicKeys.UserOwnedCardId;
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
@Table(name = "user_owned_card")
@IdClass(UserOwnedCardId.class)
public class UserOwnedCardEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Id
    @ManyToOne
    @JoinColumn(name = "card_id")
    private CreditCardEntity card;

    private String cardNickname;

    @Column(columnDefinition = "TINYINT")
    private Byte rating;

    private String comment;

    private LocalDate paymentDueDate;

    private Boolean acceptPromotionNotification;

    private Boolean acceptDueDateNotification;


}
