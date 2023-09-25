import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./PrescriptionManagement.css";
import { getprescription, postprescription } from "../../api";

const PrescriptionManagement = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    medicationName: "",
    dosage: "",
    refillInformation: "",
    instructions: "",
    notes: "",
  });

  useEffect(() => {
    fetchPrescriptions();
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
    postprescription(formData)
      .then((response) => {
        setPrescriptions((prevState) => [...prevState, response.data]);
        setFormData({
          patientName: "",
          medicationName: "",
          dosage: "",
          refillInformation: "",
          instructions: "",
          notes: "",
        });
      })
      .catch((error) => {
        console.error("Error adding prescription:", error);
      });
  };

  const fetchPrescriptions = () => {
    getprescription()
      .then((response) => {
        setPrescriptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prescriptions:", error);
      });
  };

  const handleDownloadPDF = () => {
    axios.get("http://localhost:8080/api9/prescriptions/pdf", {
      responseType: "blob",
    })
      .then((response) => {
        
        const url = URL.createObjectURL(new Blob([response.data]));

        
        const link = document.createElement("a");
        link.href = url;
        link.download = "prescriptions.pdf";

        
        document.body.appendChild(link);
        link.click();

        
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="prescription-management-container">
      <div className='fullscreen-container'>
        <Navbar />
      </div>
    
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medication Name:</label>
            <input
              type="text"
              name="medicationName"
              value={formData.medicationName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Dosage:</label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Refill Information:</label>
            <input
              type="text"
              name="refillInformation"
              value={formData.refillInformation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Prescription</button>
        </form>
        
       
        <h3>Prescription List</h3>
        <ul className="prescription-list">
          {prescriptions.map((prescription, index) => (
            <li key={index} className="prescription-item">
              <strong>Patient Name:</strong> {prescription.patientName}
              <br />
              <strong>Medication Name:</strong> {prescription.medicationName}
              <br />
              <strong>Dosage:</strong> {prescription.dosage}
              <br />
              <strong>Refill Information:</strong> {prescription.refillInformation}
              <br />
              <strong>Instructions:</strong> {prescription.instructions}
              <br />
              <strong>Notes:</strong> {prescription.notes}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default PrescriptionManagement;
