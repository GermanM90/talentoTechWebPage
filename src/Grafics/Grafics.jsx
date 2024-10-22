import React from "react";
import "./Grafics.css";

export const Grafics = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="card mb-3 card-estilos">
          <div className="row g-0 card-estilos">
            <div className="col-md-8 card-estilos">
              <div className="card-body card-estilos">
                <h1 className="card-title card-estilos">
                  Importancia de los Datos Demográficos en la Inversión
                  
                </h1>
                <p class="card-text">Una guía para decisiones informadas</p>

                <p className="card-text">
                  Contar con datos demográficos precisos es esencial al invertir
                  en una municipalidad. Estos datos permiten identificar las
                  características de la población, como la edad y el nivel de
                  ingresos, lo que ayuda a adaptar productos y prever la
                  demanda.
                </p>
              </div>
              <h2>
                Conoce los datos de tu comunidad:{" "}
                <button type="button" class="btn btn-success">
                  Click aqui
                </button>
              </h2>
            </div>
            <div className="col-md-4">
              <img
                src="/public/images/image.png"
                className="img-fluid rounded-start"
                alt="imagen graficas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
