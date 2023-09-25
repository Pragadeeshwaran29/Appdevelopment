import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./PatientCustomerForm.css";
import { getPatient, postPatient } from "../../api";
import { Connect,useSelector } from "react-redux";

const PatientCustomerForm = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age:" ",
    phone: "",
    medicalHistory: "",
    insurance: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const id=useSelector(state=>state.insinform)

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    postPatient(formData)
      .then((response) => {
      
        setCustomers((prevState) => [...prevState, response.data]);
      
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          age: "",
          phone: "",
          medicalHistory: "",
          insurance: "",
        });
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
      });
  };

  const fetchCustomers = () => {
    
    getPatient()
      .then((response) => {
        
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  };

  useEffect(() => {
    
    const results = customers.filter((customer) =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.patientId.toString().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, customers]);

  return (
    <div className="patient-customer-form-container">
      <Navbar />

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Insurance Information:</label>
            <input
              type="text"
              name="insurance"
              placeholder={id}

              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Customer</button>
        </form>

        <div className="search-container">
         
        </div>

       
          
        
      </div>
    </div>
  );
};

export default PatientCustomerForm;
