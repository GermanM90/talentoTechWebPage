import './ServiciosWeb.css'

export const ServiciosWeb = () => {
  return (
    <>
    <div className="servicios-estilos">
    <h1>Si estas en busca de trabajo, esta es tu seccion</h1>
    <p>Publica tu HV o dejanos una breve descripción de ti y de tu oficio, profesion o arte</p>
    <p>Te ayudaremos con nuestras empresas aliadas en tu busqueda, alguno de nuestros visitantes también puede ver tu info y contactarte.</p>
    <h4>Publica tu HV en el siguiente enlace: </h4>

    <input className='input-post'type="file" placeholder='Adjunta tu HV' />
    <button type="button" class="btn btn-success">Enviar</button>
    
    </div>
   
    </>
  )
}

