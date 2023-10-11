package com.sandy.demo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Purchase")
public class PurchaseEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String supplierName;
	private String contactNumber;
	private String medicineName;
	private String packing;
	private String date;
	private String rate;
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
	
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getPacking() {
		return packing;
	}
	public void setPacking(String packing) {
		this.packing = packing;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	public PurchaseEntity(int id, String name, String contactNumber, String medicineName , String packing,String date,String rate) {
		super();
		this.id = id;
		this.supplierName =name;
		this.contactNumber = contactNumber;
		this.medicineName = medicineName;
		this.packing = packing;
		this.date = date;
		this.rate = rate;
	}
	public PurchaseEntity() {}
}



