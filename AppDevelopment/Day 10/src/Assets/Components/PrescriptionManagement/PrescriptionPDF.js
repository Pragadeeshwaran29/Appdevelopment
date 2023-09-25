// PrescriptionPDF.js

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PrescriptionPDF = ({ prescriptions }) => (
  <PDFViewer style={{ width: "100%", height: "600px" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        {prescriptions.map((prescription, index) => (
          <View key={index} style={styles.section}>
            <Text>Patient Name: {prescription.patientName}</Text>
            <Text>Medication Name: {prescription.medicationName}</Text>
            <Text>Dosage: {prescription.dosage}</Text>
            <Text>Refill Information: {prescription.refillInformation}</Text>
            <Text>Instructions: {prescription.instructions}</Text>
            <Text>Notes: {prescription.notes}</Text>
          </View>
        ))}
      </Page>
    </Document>
  </PDFViewer>
);

export default PrescriptionPDF;
