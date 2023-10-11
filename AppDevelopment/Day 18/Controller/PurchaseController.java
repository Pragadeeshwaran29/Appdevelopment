package com.sandy.demo.Controller;
import java.util.List;

import java.util.Optional;

import javax.xml.crypto.Data;

import org.hibernate.grammars.hql.HqlParser.SortDirectionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sandy.demo.Entity.PurchaseEntity;
import com.sandy.demo.Repository.PurchaseRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/supplier")
public class PurchaseController {
	

    @Autowired
    private PurchaseRepository purchaseRepository;
    @GetMapping(value="/get")
    public List<PurchaseEntity> getAllPurchaseEntity(){
        return purchaseRepository.findAll();
    }
    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
    public Page<PurchaseEntity> getData(@PathVariable(value="currentPage") int page,
                                              @PathVariable(value= "itemsPerPage") int size,
                                              @PathVariable(value= "sortBy") String field,
                                              @PathVariable(value= "sortOrder") String direction) {
    	Pageable paging;
   if(direction.equals("asc")) {
   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
   }
   else {
	   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
   }
  return  purchaseRepository.findAll(paging);
    }	
    @PostMapping
    public PurchaseEntity createPurchaseEntity(@RequestBody PurchaseEntity product) {
        return purchaseRepository.save(product);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<PurchaseEntity>> getPurchaseEntityById(@PathVariable  int id){
        Optional<PurchaseEntity> product = purchaseRepository.findById(id);
        return ResponseEntity.ok(product);
    }

    @PutMapping("{id}")
	public PurchaseEntity updateBookDetails(@RequestBody PurchaseEntity b)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		return purchaseRepository.save(b);		
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
    	purchaseRepository.deleteById(id);
		return "Id : "+id+" is deleted";
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	purchaseRepository.deleteAll();
    	return "All customer deleted";
    }
}
