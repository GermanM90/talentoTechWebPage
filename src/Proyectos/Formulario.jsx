import React, { useState } from "react";

export const Formulario = () => {
  const [cantidad, setCantidad] = useState("");
  const [plazo, setPlazo] = useState("");
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(null);

  const calcularPrestamo = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    setError(false);
    calcularTotal();
  };

  const calcularTotal = () => {
    let impuesto = 0;

    switch (plazo) {
      case "3":
        impuesto = 1.025; 
        break;
      case "6":
        impuesto = 1.015; 
        break;
      case "12":
        impuesto = 1.01; 
        break;
      case "18":
        impuesto = 1.0075; 
        break;
      case "24":
        impuesto = 1.005; 
        break;
      default:
        return;
    }

    const totalCalculado = cantidad * plazo * impuesto;
    setTotal(totalCalculado);
  };

  const borrarValores = () => {
    setCantidad("");
    setPlazo("");
    setTotal(null);
    setError(false);
  };

  return (
    <>
      <form onSubmit={calcularPrestamo}>
        
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Ej: 500.000"
                aria-label="valor"
                onChange={(e) => setCantidad(Number(e.target.value))}
                value={cantidad} 
              />
            </div>
            
            <div className="col">
              <select
                className="form-select"
                onChange={(e) => setPlazo(e.target.value)}
                aria-label="Default select example"
                value={plazo} 
              >
                <option value="">Plazo</option>
                <option value="3">3 Meses</option>
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="18">18 Meses</option>
                <option value="24">24 Meses</option>
              </select>
            </div>
            <div className="btnSubmit">
              <input type="submit" value="Calcular" className="botonCalcular" />
            </div>
            <div className="btnBorrar">
              <button type="button" onClick={borrarValores} className="botonBorrar">Borrar</button>
            </div>
          </div>
        </div>
        {error ? <p className="error">Todos los campos son obligatorios</p> : ""}
      </form>

      {total !== null && <p>Total a pagar al finalizar el crédito: <h4>{total.toFixed(2)} COP </h4> </p>}
    </>
  );
};



