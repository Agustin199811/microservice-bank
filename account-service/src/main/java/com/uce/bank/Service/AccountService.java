package com.uce.bank.Service;

import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.uce.bank.Model.Account;
import com.uce.bank.Repository.AccountRepository;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account getAccountById(Long id) {
        return accountRepository.findById(id).orElse(null);
    }

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account deposit(Long id, BigDecimal amount) {
        Account account = getAccountById(id);
        if (account != null) {
            account.setBalance(account.getBalance().add(amount));
            return accountRepository.save(account);
        }
        return null;
    }

    public Account withdraw(Long id, BigDecimal amount) {
        Account account = getAccountById(id);
        if (account != null && account.getBalance().compareTo(amount) >= 0) {
            account.setBalance(account.getBalance().subtract(amount));
            return accountRepository.save(account);
        }
        return null;
    }
}
