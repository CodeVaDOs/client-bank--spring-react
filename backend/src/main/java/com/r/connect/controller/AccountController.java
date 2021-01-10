package com.r.connect.controller;

import com.r.connect.dto.DepositRq;
import com.r.connect.dto.TransferRq;
import com.r.connect.entity.Account;
import com.r.connect.service.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("api/account")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public List<Account> getAccounts() {
        return accountService.getAccounts();
    }

    @PostMapping("deposit")
    public Account doDeposit(@RequestBody DepositRq deposit) {
        Optional<Double> amount = Optional.ofNullable(deposit.getAmount());
        Optional<String> number = Optional.ofNullable(deposit.getNumber());

        return number.flatMap(n ->
                amount.map(a ->
                        accountService.doDeposit(n, a)))
                .orElseThrow(() -> new IllegalArgumentException("Deposit is incorrect"));
    }

    @PostMapping("withdraw")
    public Account doWithdraw(@RequestBody DepositRq withdraw) {
        Optional<Double> amount = Optional.ofNullable(withdraw.getAmount());
        Optional<String> number = Optional.ofNullable(withdraw.getNumber());

        return number.flatMap(n ->
                amount.map(a ->
                        accountService.doWithdraw(n, a)))
                .orElseThrow(() -> new IllegalArgumentException("Withdraw is incorrect"));
    }

    @PostMapping("transfer")
    public List<Account> doTransfer(@RequestBody TransferRq transfer) {
        Optional<Double> amount = Optional.ofNullable(transfer.getAmount());
        Optional<String> fromNumber = Optional.ofNullable(transfer.getNumberFrom());
        Optional<String> toNumber = Optional.ofNullable(transfer.getNumberTo());

        return amount.flatMap(a ->
                fromNumber.flatMap(fn ->
                        toNumber.map(tn -> accountService.doTransfer(fn, tn, a))
                        )
                ).orElseThrow(() -> new IllegalArgumentException("Transfer is incorrect"));
    }
}
