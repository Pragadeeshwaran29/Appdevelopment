package com.sandy.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sandy.demo.Entity.SupplierEntity;
import com.sandy.demo.Repository.SupplierRepository;
@Service
public class SupplierService {




	@Autowired
	SupplierRepository supplierRepository;
		public Page<SupplierEntity> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return supplierRepository.findAll(paging);
		}
		public Page<SupplierEntity> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return supplierRepository.findAll(paging);
		}
}


