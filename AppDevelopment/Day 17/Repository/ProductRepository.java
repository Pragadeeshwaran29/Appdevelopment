package com.sandy.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandy.demo.Entity.ProductEntity;




public interface ProductRepository extends JpaRepository<ProductEntity,Integer>{

}
