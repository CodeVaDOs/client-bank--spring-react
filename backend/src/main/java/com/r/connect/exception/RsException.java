package com.r.connect.exception;

import lombok.Data;

@Data
public class RsException {
    private String exceptionMessage;

    public RsException(Exception exception) {
        this.exceptionMessage = exception.getMessage();
    }
}
