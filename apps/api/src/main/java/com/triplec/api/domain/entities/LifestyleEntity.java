package com.triplec.api.domain.entities;

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
@Table(name = "lifestyle")
public class LifestyleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer lifestyleId;

    private String lifestyleName;

    private String lifestyleDescription;

    private String lifestyleIconUrl;
}
