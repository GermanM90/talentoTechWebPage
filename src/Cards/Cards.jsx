import React from "react";
import './Cards.css'
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 mb-4"> 
        <div className="card-estilos">
          <img src="/images/card1.jpg" className="card-img-top" alt="imagenCarta1" />
          <div className="card-body">
            <h5 className="card-title">Emprende</h5>
            <p className="card-text">
              Cuéntanos un poco sobre ti, tu emprendimiento y objetivos
            </p>
            <Link to="/emprende" className="btn btn-success">
              Emprendedores
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3"> 
        <div className="card-estilos">
          <img src="/images/card2.jpg" className="card-img-top" alt="imagenCarta2" />
          <div className="card-body">
            <h5 className="card-title">Asesoría Financiera</h5>
            <p className="card-text">
              Solicitudes de créditos para PYMES a través de Bancos y Cooperativas
            </p>
            <Link to="/proyectos" className="btn btn-success">
              Proyectos
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3"> 
        <div className="card-estilos">
          <img src="/images/card3.jpg" className="card-img-top" alt="imagenCarta3" />
          <div className="card-body">
            <h5 className="card-title">Servicios</h5>
            <p className="card-text">
              Prestas alguna clase de servicio o te desarrollas en un arte
            </p>
            <Link to="/servicios" className="btn btn-success">
              Servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  );
};
