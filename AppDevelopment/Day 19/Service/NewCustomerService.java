package com.sandy.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sandy.demo.Entity.NewCustomerEntity;
import com.sandy.demo.Repository.NewCustomerRepository;
@Service
public class NewCustomerService {




	@Autowired
	NewCustomerRepository newCustomerRepository;
		public Page<NewCustomerEntity> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return newCustomerRepository.findAll(paging);
		}
		public Page<NewCustomerEntity> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return newCustomerRepository.findAll(paging);
		}
}

