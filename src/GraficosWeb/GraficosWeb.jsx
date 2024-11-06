import "./GraficosWeb.css";

export const GraficosWeb = () => {
  return (
    <>
      <div className="container">
        <h2>Estudio de la Comuna 6: Crecimiento, Empleabilidad y Equilibrio de Género</h2>
        <p className="p-font">
          En esta página de gráficos, se presenta un análisis visual de diversos
          aspectos clave que definen la dinámica social y económica de la comuna
          6 de Medellín. Los datos reflejan tendencias significativas sobre el
          crecimiento demográfico, la empleabilidad, la distribución de la
          población por barrios y la representación de género en la zona. A
          través de estos gráficos, se busca ofrecer una visión comprensiva de
          las características demográficas y laborales de la comuna 6, ayudando
          a identificar áreas clave para el desarrollo social, económico y
          urbano. Estos datos proporcionan una base sólida para tomar decisiones
          informadas y crear políticas públicas que favorezcan el bienestar
          colectivo.
        </p>
      </div>

      {/* Primera grafica */}
      <div className="container">
        <div className="row g-2">
          <div className="col-md-6 col-12">
            <div className="card-estilos-graficos-imagen">
              <img
                src="/public/images/imagenes-graficos/graph4.jpg"
                className="card-img-top"
                alt="Crecimiento demográfico"
              />
              <div className="card-body">
                <h2>Crecimiento demográfico</h2>
                <p className="card-text">
                  El crecimiento poblacional se había mantenido estable antes de
                  2020, pero este año presenta una anomalía que refleja un
                  paréntesis temporal en una tendencia de expansión demográfica
                  general. En los años anteriores a 2020, los incrementos eran
                  constantes, pero este evento excepcional alteró ese patrón
                </p>
              </div>
            </div>
          </div>

          {/* Segunda grafica */}
          <div className="col-md-6 col-12">
            <div className="card-estilos-graficos-imagen">
              <img
                src="/public/images/imagenes-graficos/graph5.jpg"
                className="card-img-top"
                alt="Empleabilidad"
              />
              <div className="card-body">
                <h2>Empleabilidad</h2>
                <p className="card-text">
                  Más de la mitad de las microempresas en la comuna están
                  conformadas por entre 1 y 5 empleados, lo que sugiere que
                  muchas de estas empresas son operadas por pequeños grupos
                  familiares o emprendedores individuales
                </p>
              </div>
            </div>
          </div>
          {/* Tercera grafica */}
          <div className="col-md-6 col-12">
            <div className="card-estilos-graficos-imagen">
              <img
                src="/public/images/imagenes-graficos/graph3rr.jpg"
                className="card-img-top"
                alt="Poblacion por barrios"
              />
              <div className="card-body">
                <h2>Poblacion por barrios</h2>
                <p className="card-text">
                  Según los porcentajes obtenidos por barrios, podemos deducir
                  que en muchos de ellos la poblacion está bien distribuida
                  proporcionalmente siendo los barrios: Pedregar, la Piralica,
                  Esperanza #2, los mayores poblados en la comuna 6 de Medellin
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            {" "}
            {/* Cambiado aquí */}
            <div className="card-estilos-graficos-imagen">
              <img
                src="/public/images/imagenes-graficos/graph1.jpg"
                className="card-img-top"
                alt="Población por genero"
              />
              <div className="card-body">
                <h2>Población por genero</h2>
                <p className="card-text">
                  La diferencia de solo un 5.6% entre hombres y mujeres
                  demuestra que en la comuna 6 se mantiene un equilibrio
                  relativamente cercano entre ambos géneros, lo que puede
                  facilitar el diseño de políticas que promuevan la igualdad de
                  género y el acceso equitativo a servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
