package com.r.connect.service;

import com.r.connect.entity.Account;
import com.r.connect.exception.LackOfMoneyException;
import com.r.connect.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> getAccounts() {
        return this.accountRepository.findAll();
    }

    public Account doDeposit(String number, Double amount) {
        Account account = accountRepository.findAccountByNumber(number).orElseThrow(() -> new NoSuchElementException(String.format("Account with number %s not found :(", number)));

        if (amount > 0) {
            account.setBalance(account.getBalance() + amount);
            return accountRepository.save(account);
        }
        throw new IllegalArgumentException("Amount must be > 0");
    }

    public Account doWithdraw(String number, Double amount) {
        Account account = accountRepository.findAccountByNumber(number).orElseThrow(() -> new NoSuchElementException(String.format("Account with number %s not found :(", number)));

        if (account.getBalance() < amount) throw new LackOfMoneyException(String.format("An attempt to withdraw an amount more than is available. Balance: %d, Amount: %d", account.getBalance(), amount));
        if (amount <= 0) throw new IllegalArgumentException("Amount must be > 0");

        account.setBalance(account.getBalance() - amount);
        return accountRepository.save(account);
    }

    public List<Account> doTransfer(String fn, String tn, Double a) {
        Account accountFrom = accountRepository.findAccountByNumber(fn).orElseThrow(() -> new NoSuchElementException(String.format("Account with number %s not found :(", fn)));
        Account accountTo = accountRepository.findAccountByNumber(tn).orElseThrow(() -> new NoSuchElementException(String.format("Account with number %s not found :(", tn)));

        if (a <= 0) throw new IllegalArgumentException("Amount must be > 0");
        if (accountFrom.getBalance() < a) throw new LackOfMoneyException(String.format("An attempt to withdraw an amount more than is available. Balance: %d, Amount: %d", accountFrom.getBalance(), a));

        accountFrom.setBalance(accountFrom.getBalance() - a);
        accountTo.setBalance(accountTo.getBalance() + a);
        return accountRepository.saveAll(Arrays.asList(accountFrom, accountTo));
    }
}
