import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from './Pages/Navbar'
import Login from './Pages/Login'
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

export default function App() {
  return (
   <>
   <Navbar/>
    <BrowserRouter>
      <Routes>
        
        <Route path="/Login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/reset-password" exact element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

