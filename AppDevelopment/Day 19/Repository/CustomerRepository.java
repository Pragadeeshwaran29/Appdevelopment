package com.sandy.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandy.demo.Entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
	Optional<Customer> findByEmail(String email);
}
