package com.sandy.demo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="newcustomer")
public class NewCustomerEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String customerName;
	
	private String customerNumber;
	private String customerAddress;
	private String doctorName;
	private String doctorAddress;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String name) {
		this.customerName = name;
	}
	
	public String getCustomerNumber() {
		return customerNumber;
	}
	public void setCustomerNumber(String customerNumber) {
		this.customerNumber = customerNumber;
	}
	public String getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getDoctorAddress() {
		return doctorAddress;
	}
	public void setDoctorAddress(String doctorAddress) {
		this.doctorAddress = doctorAddress;
	}
	public NewCustomerEntity(int id, String name, String customerNumber, String customerAddress , String doctorName,String doctorAddress) {
		super();
		this.id = id;
		this.customerName =name;
		this.customerNumber = customerNumber;
		this.customerAddress = customerAddress;
		this.doctorName = doctorName;
		this.doctorAddress = doctorAddress;
	}
	public NewCustomerEntity() {}
}


