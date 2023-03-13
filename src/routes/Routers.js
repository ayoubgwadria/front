import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Emplois from "../pages/Emplois";
import Technicien from "../pages/Technicien";
import TechnicienDet from "../pages/TechnicienDetails"
import EmploisDet from "../pages/EmploisDetails";
import Choose from "../pages/Choose";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/technicien" element={<Technicien/>} />
      <Route path="/choose" element={<Choose/>} />
      <Route path="/emplois" element={<Emplois />} />
      <Route path="/emplois/:id" element={<EmploisDet/>} />
      <Route path="/technicien/:id" element={<TechnicienDet/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
