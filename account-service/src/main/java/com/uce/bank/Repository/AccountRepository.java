package com.uce.bank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uce.bank.Model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    
}
