package com.r.connect.controller;

import com.r.connect.exception.LackOfMoneyException;
import com.r.connect.exception.RsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class GlobalExceptionHandler{
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({NoSuchElementException.class})
    public RsException noSuchElementExceptionHandler(NoSuchElementException ex) {
        return new RsException(ex);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({IllegalArgumentException.class, LackOfMoneyException.class})
    public RsException illegalArgumentExceptionHandler(Exception ex) {
        return new RsException(ex);
    }
}
