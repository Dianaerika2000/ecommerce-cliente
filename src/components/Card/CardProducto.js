import { Link } from 'react-router-dom';

export default function CardProducto({ title, description, price, image, linkBuy, linkCar, linkVer }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-custom mx-auto d-block" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}&nbsp;<Link className='text-end' to={linkVer}><small>ver mas</small></Link>
        </p>
        <p className="card-text fs-6 fw-semibold">
          {price} Bs.
        </p>
        {/* <p className='text-end'>
          <Link className='text-end' to=""><small>ver mas</small></Link>
        </p> */}
        <div className="d-flex justify-content-around">
          <Link to={linkBuy} className="btn btn-success">
            <i className="bi bi-whatsapp" /> Comprar
          </Link>
          <Link to={linkCar} className="btn btn-success">
            <i className="bi bi-basket2" /> Agregar
          </Link>
        </div>
        {/* <div className="text-center">
          <div className="btn-group" role="group">
            <Link to={linkBuy} className="btn btn-outline-success">
              <i className="bi bi-whatsapp" /> Comprar
            </Link>
            <Link to={linkCar} className="btn btn-outline-success">
              <i className="bi bi-basket2" /> Agregar
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
