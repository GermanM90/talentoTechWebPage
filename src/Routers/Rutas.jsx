import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Footer } from "../shared/Footer/Footer";
import { Navbar } from "../shared/Navbar/Navbar";
import { GraficosWeb } from "../GraficosWeb/GraficosWeb";
import { EmprendeWeb } from "../EmprendeWeb/EmprendeWeb";
import { Proyectos } from "../Proyectos/Proyectos";
import { ServiciosWeb } from "../ServiciosWeb/ServiciosWeb";
import { ScrollToTop } from "../shared/ScrollTop/ScrollTop";
import { Contactanos } from "../Contactanos/Contactanos";
import { Conocenos } from "../Conocenos/Conocenos";




export const Rutas = () => {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graficos" element={<GraficosWeb />} />
        <Route path="/emprende" element={<EmprendeWeb />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<ServiciosWeb />} />
        <Route path="/contactanos" element={<Contactanos />} /> 
        <Route path="/conocenos" element={<Conocenos />} />

      </Routes>
      <Footer></Footer>
    </>
  );
};
