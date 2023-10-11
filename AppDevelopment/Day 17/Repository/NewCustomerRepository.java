package com.sandy.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandy.demo.Entity.NewCustomerEntity;




public interface NewCustomerRepository extends JpaRepository<NewCustomerEntity,Integer>{

}

