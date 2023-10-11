package com.sandy.demo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="medicine")
public class ProductEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String medicineName;
	
	private String packing;
	private String genericName;
	private String supplierName;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String name) {
		this.medicineName = name;
	}
	
	public String getPacking() {
		return packing;
	}
	public void setPacking(String quantity) {
		this.packing = quantity;
	}
	public String getGenericName() {
		return genericName;
	}
	public void setGenericName(String genericName) {
		this.genericName = genericName;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}
	public ProductEntity(int id, String name, String packing, String genericName , String supplierName) {
		super();
		this.id = id;
		this.medicineName =name;
		this.packing = packing;
		this.genericName = genericName;
		this.supplierName = supplierName;
	}
	public ProductEntity() {}
}


