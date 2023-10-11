package com.sandy.demo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="supplier")
public class SupplierEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String supplierName;
	
	private String supplierEmail;
	private String contactNumber;
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String name) {
		this.supplierName = name;
	}
	
	public String getSupplierEmail() {
		return supplierEmail;
	}
	public void setSupplierEmail(String supplierEmail) {
		this.supplierEmail = supplierEmail;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public SupplierEntity(int id, String name, String supplierEmail, String customerAddress , String doctorName,String address) {
		super();
		this.id = id;
		this.supplierName =name;
		this.supplierEmail = supplierEmail;
		this.contactNumber = contactNumber;
		this.address = address;
	}
	public SupplierEntity() {}
}



