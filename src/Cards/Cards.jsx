import React from "react";
import './Cards.css'

export const Cards = () => {
  return (
    <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 mb-3"> {/* Ocupa 1/3 del ancho en pantallas medianas y grandes */}
        <div className="card-estilos">
          <img src="/images/card1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Emprende</h5>
            <p className="card-text">
              Cuéntanos un poco sobre ti, tu emprendimiento y objetivos
            </p>
            <a href="#" className="btn btn-success">
              Emprendedores
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3"> {/* Igual aquí */}
        <div className="card-estilos">
          <img src="/images/card2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Asesoría Financiera</h5>
            <p className="card-text">
              Solicitudes de créditos para PYMES a través de Bancos y Cooperativas
            </p>
            <a href="#" className="btn btn-success">
              Proyectos
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3"> {/* Y aquí también */}
        <div className="card-estilos">
          <img src="/images/card3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Servicios</h5>
            <p className="card-text">
              Prestas alguna clase de servicio o te desarrollas en un arte
            </p>
            <a href="#" className="btn btn-success">
              Servicios
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  );
};
