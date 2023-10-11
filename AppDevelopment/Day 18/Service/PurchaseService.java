package com.sandy.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sandy.demo.Entity.PurchaseEntity;
import com.sandy.demo.Repository.PurchaseRepository;
@Service
public class PurchaseService {




	@Autowired
	PurchaseRepository purchaseRepository;
		public Page<PurchaseEntity> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return purchaseRepository.findAll(paging);
		}
		public Page<PurchaseEntity> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return purchaseRepository.findAll(paging);
		}
}


