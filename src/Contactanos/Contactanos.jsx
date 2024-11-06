import React from "react";
import "./Contactanos.css";

export const Contactanos = () => {
  
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <div className="form-container">
            <h2>Agenda tu asesoria</h2>
            <form>
              <input type="text" placeholder="Nombres" />
              <input type="text" placeholder="Apellidos" />
              <input type="text" placeholder="Nombre de tu negocio" />
              <input type="text" placeholder="Tipo de negocio" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Número teléfonico" />
              <input type="number" placeholder="Numero de empleados" />
              <button type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
