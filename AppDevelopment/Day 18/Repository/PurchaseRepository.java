package com.sandy.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandy.demo.Entity.PurchaseEntity;




public interface PurchaseRepository extends JpaRepository<PurchaseEntity,Integer>{

}


