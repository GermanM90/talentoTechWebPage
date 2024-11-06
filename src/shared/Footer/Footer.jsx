import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <footer className="text-center text-white">
          <div className="container">
            <section className="mt-12">
              <div className="row text-center d-flex justify-content-center pt-5">
              <hr className="my-12" />
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/conocenos" className="text-white">
                      Nosotros
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/proyectos" className="text-white">
                      Creditos
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/emprende" className="text-white">
                      Emprendimiento
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/servicios" className="text-white">
                      Servicios
                    </Link>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/contactanos" className="text-white">
                      Contactanos
                    </Link>
                  </h6>
                </div>
                
              </div>
            </section>
            <section className="mt-5"></section>
            <section className="text-center mb-4">
              <a href="https://www.facebook.com/" className="text-white me-4" target='blank'>
                <i className="fab fa-facebook-f social-icon"></i>
              </a>
              <a href="https://x.com/?lang=en" className="text-white me-4" target='blank'>
                <i className="fab fa-twitter social-icon"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google social-icon"></i>
              </a>
              <a href="https://www.instagram.com/" target='blank' className="text-white me-4">
                <i className="fab fa-instagram social-icon"></i>
              </a>
              <a href="https://www.linkedin.com/" className="text-white me-4" target='blank'>
                <i className="fab fa-linkedin social-icon"></i>
              </a>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};
