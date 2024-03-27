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
@Table(name = "user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    private String lineId;

    private String email;

    private String phoneNumber;

    private String profilePictureUrl;

    @OneToMany(mappedBy = "user")
    private List<UserLifestyleEntity> lifestyles;

    @ManyToMany
    @JoinTable(
            name = "user_like_card",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id")
    )
    private List<CreditCardEntity> likedCards;

    @OneToMany(mappedBy = "user")
    private List<UserOwnedCardEntity> ownedCards;

}