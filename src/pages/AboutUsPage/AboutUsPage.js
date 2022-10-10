import historia from '../../assets/images/historia-restaurante.jpg';
export default function AboutUsPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-4">
          <h2 className="text-uppercase">Acerca de nosotros</h2>
          <p className='justificado'>Somos un restaurante de comida tipica cruceña, prestamos nuestros servicio desde el año 1978. Nuestra abuela fue quien dio inicio este negocio familiar y actualmente contamos con cinco sucurales en la ciudad de Santa Cruz de la Sierra.</p>
          <p>Sabor tradiconal</p>
        </div>
        <div className="col-5">
          <img src={historia} alt="historia del restaurante" className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
}
