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
    private Integer userId;

    private Integer salary;

    @ManyToMany
    @JoinTable(
            name = "user_lifestyle",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "lifestyle_id")
    )
    private List<LifestyleEntity> lifestyles;

    @ManyToMany
    @JoinTable(
            name = "user_like_card",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id")
    )
    private List<CreditCardEntity> likedCards;

    @OneToMany(mappedBy = "user")
    private List<OwnedCardEntity> ownedCards;
}
