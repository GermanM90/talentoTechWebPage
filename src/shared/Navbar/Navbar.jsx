import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              width="80"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <a className="navbar-brand" href="#">
            Inicio
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Proyecto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Copacitaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Conocenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contactanos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Graficos
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Sesion
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
