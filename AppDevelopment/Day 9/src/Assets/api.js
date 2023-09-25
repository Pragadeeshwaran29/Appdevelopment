import axios from "axios";


const username = 'jaga';
const password = '123456';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
  
};


const URI = 'http://localhost:8080'
const URI2 = 'http://localhost:8082'
const itemid = localStorage.getItem("itemid");


 const gethelp = () => axios.get(`${URI2}/api111/get`, { headers })
 const posthelp = (data) => axios.post(`${URI2}/api111/post`,data,{ headers })
const getlogin = (data) => axios.post(`${URI}/post`, data,{ headers })
const getregister = () => axios.get(`${URI}/get`, { headers })
const getInventory = () => axios.get(`${URI}api/getuser`, { headers })
const postInventory = (formData) => axios.post(`${URI}/api/adduser`, formData,{ headers })
const deleteInventory = () => axios.delete(`${URI}/api/deleteuser/${itemid}`,{ headers })
const putInventory = (itemToUpdate) => axios.put(`${URI}/api/edituser/${itemid}`,{ headers })
const getPointofSale = () => fetch.get(`${URI}api3/getuser`, { headers })
const postPointofSale = (CartItem) => axios.post(`${URI}/api3/adduser`, CartItem,{ headers })
 const postPatient = (formData) => axios.post(`${URI}/api4/addPatients`, formData,{ headers })
 const getPatient = () => axios.get(`${URI}api4/getPatient`, { headers })
 const getprescription = () => axios.get(`${URI}api9/getuser`, { headers })
 const postprescription = (formData) => axios.post(`${URI}/api9/adduser`, formData,{ headers })
 const postpurchasing = (newProduct) => axios.post(`${URI}/api1/adduser`, newProduct,{ headers })
 const getpurchasing = () => axios.get(`${URI}api1/getuser`, { headers })
export {getlogin,getregister,getInventory,postInventory,deleteInventory,putInventory,getPointofSale,postPointofSale,
postPatient,getPatient,getprescription,postprescription,postpurchasing,getpurchasing,gethelp,posthelp}
