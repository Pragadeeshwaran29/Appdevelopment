package com.sandy.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandy.demo.Entity.SupplierEntity;




public interface SupplierRepository extends JpaRepository<SupplierEntity,Integer>{

}

