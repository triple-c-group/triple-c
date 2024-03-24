package com.triplec.api.domain.entities;

import com.triplec.api.domain.entities.publicKeys.UserLifestyleId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "user_lifestyle")
@IdClass(UserLifestyleId.class)
public class UserLifestyleEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity user;

    @Id
    @ManyToOne
    @JoinColumn(name = "lifestyle_id", referencedColumnName = "lifestyle_id")
    private LifestyleEntity lifestyle;

    @Column(columnDefinition = "TINYINT")
    private Byte lifestyleRank;
}
