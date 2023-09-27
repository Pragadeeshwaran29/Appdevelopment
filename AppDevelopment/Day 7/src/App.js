import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar';
import Signup from './Components/Signup';
import AdminLogin from './Components/AdminLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

   
   