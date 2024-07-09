package com.uce.customer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uce.customer.Model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
}
