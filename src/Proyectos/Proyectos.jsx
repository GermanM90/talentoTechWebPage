import { Formulario } from "./formulario";
import "./Proyectos.css";

export const Proyectos = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h3>Solicitud de crédito</h3>
            <p>
              Descubre nuestras opciones de crédito de bajo interés, diseñadas
              para facilitar tus proyectos y mejorar tu calidad de vida. Con
              tasas competitivas y plazos flexibles, podrás acceder a
              financiamiento sin comprometer tu presupuesto. Aprovecha la
              oportunidad de invertir en tu futuro con condiciones que se
              adaptan a tus necesidades.
            </p>
          </div>
          <div className="col-sm-4">
            <h3>simulador de créditos</h3>
            <Formulario />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h3>Nuestra empresas aliadas: </h3>
          <div className="col align-self-start"><img src="/public/images/comfama.jpg" alt="comfama" className="imagen-proyectos" /></div>
          <div className="col align-self-center"><img src="/public/images/bamcolombia.jpeg" alt="bancolombia" className="imagen-proyectos" /></div>
          <div className="col align-self-end"><img src="/public/images/mintic.jpg" alt="mintic" className="imagen-proyectos" /></div>
        </div>
      </div>
    </>
  );
};
