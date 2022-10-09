import { Link } from 'react-router-dom';

export default function CardProducto({ title, description, price, image, linkBuy, linkCar }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-custom mx-auto d-block" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small>{description}</small>
        </p>
        <p className="card-text fs-6 fw-semibold">{price} Bs.</p>
        <div class="d-flex justify-content-around">
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
