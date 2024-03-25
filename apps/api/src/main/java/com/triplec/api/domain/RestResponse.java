package com.triplec.api.domain;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RestResponse {
    private Boolean success;

    private Object data;
}
