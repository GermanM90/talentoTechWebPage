import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Cards } from "../Cards/Cards";
import { Footer } from "../shared/Footer/Footer";
import { Navbar } from "../shared/Navbar/Navbar";




export const Rutas = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};
