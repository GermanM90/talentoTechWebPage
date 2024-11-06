import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              width="80"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/conocenos">
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/emprende">
                  Emprendimientos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/proyectos">
                  Asesoria Financiera
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/servicios">
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/contactanos">
                  Contactanos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/graficos">
                  Graficos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
