import { Link } from 'react-router-dom';

export default function CardProducto({
  title,
  description,
  price,
  image,
  linkBuy,
  linkCar,
  linkVer,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-custom mx-auto d-block" alt={title} />
      </div>
      <div className="card-body text-center bg-car-body">
        <h5 className="card-title">
          <Link className="text-decoration-none text-dark fs-5 text fw-semibold" to={linkVer}>
            {title}
          </Link>
        </h5>
        {/* <p className="card-text">
          {description}&nbsp;<Link className='text-end' to={linkVer}><small>ver mas</small></Link>
        </p> */}
        <p className="card-text fs-5  texto-card">Precio: {price} Bs.</p>
        {/* <p className='text-end'>
          <Link className='text-end' to=""><small>ver mas</small></Link>
        </p> */}
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={linkBuy} className="btn btn-outline-success">
            <i className="bi bi-whatsapp" /> Comprar
          </Link>
          <Link to={linkCar} className="btn btn-outline-success">
            <i className="bi bi-basket2" /> Agregar
          </Link>
        </div>
      </div>
    </div>
  );
}
