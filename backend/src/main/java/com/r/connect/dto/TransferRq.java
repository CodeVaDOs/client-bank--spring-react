package com.r.connect.dto;

import lombok.Data;

@Data
public class TransferRq {
    String numberFrom;
    String numberTo;
    Double amount;

}
