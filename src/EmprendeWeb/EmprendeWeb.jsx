import React, { useState } from "react";
import "./EmprendeWeb.css";

export const EmprendeWeb = () => {
  const [people, setPeople] = useState([]);
  const [nombreNegocio, setnombreNegocio] = useState("");
  const [tiendaTipo, setTiendaTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      nombreNegocio,
      tiendaTipo,
      ubicacion,
      whatsapp,
    };
    setPeople([...people, newPerson]);

    // Limpiar los inputs
    setnombreNegocio("");
    setTiendaTipo("");
    setUbicacion("");
    setWhatsapp("")
  };

  const Card = ({ person }) => {
    return (
      <div className="card-estilos">
        <img
          src="/public/images/pagandoEmprendedores.jpg"
          className="card-img-top"
          alt="imagenCarta1"
        />
        <div className="card-body">
          <h3>Nombre del Negocio: {person.nombreNegocio}</h3>
          <h4>Tipo de negocio: {person.tiendaTipo}</h4>
          <h5>Ubicación: {person.ubicacion}</h5>
          <h5>Whatsapp: {person.whatsapp}</h5>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="encabezado">
        <h1>Bienvenido a tu mejor oportunidad de inversión</h1>
        <p>
          Publica en nuestra página web y llega a miles de usuarios en tu
          comunidad y fuera de ella.
        </p>
        <p>
          A continuación encontrarás un cuestionario básico para completar y
          así tener publicado tu emprendimiento.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-estilos">
        <input
          type="text"
          placeholder="Nombre del Negocio"
          value={nombreNegocio}
          onChange={(e) => setnombreNegocio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo de negocio"
          value={tiendaTipo}
          onChange={(e) => setTiendaTipo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <button type="submit" className="boton-publicar">
          Publicar
        </button>
      </form>

      <div className="container">
      <div className="container-cartas-emprendedores">
        {people.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
      </div>
    </>
  );
};
