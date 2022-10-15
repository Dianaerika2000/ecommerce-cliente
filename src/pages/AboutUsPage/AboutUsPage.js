import historia from '../../assets/images/historia-restaurante.jpg';
export default function AboutUsPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-4">
          <h2 className="text-uppercase">Acerca de nosotros</h2>
          <p className='justificado'>Comida Típica Suarez ha sido fundado en el año 1978 por Dn. Arturo Suárez Perrogón. <br/>Desde ese entonces hasta hoy venimos sirviendo a Santa Cruz comida típica como hecha en casa. Hemos crecido, pero guardamos la sencillez y el sabor inigualable. Actualmente contamos con cinco sucurales en la ciudad de Santa Cruz de la Sierra.</p>
          <p>Sabor tradiconal...!</p>
        </div>
        <div className="col-5">
          <img src={historia} alt="historia del restaurante" className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
}
