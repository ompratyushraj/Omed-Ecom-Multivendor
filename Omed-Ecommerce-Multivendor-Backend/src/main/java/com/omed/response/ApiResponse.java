package com.omed.response;

import lombok.*;

@Getter
@Setter
public class ApiResponse {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
