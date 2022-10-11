import { Link } from "react-router-dom";

export default function CardHorizontal({ title, description, price, image, linkBuy, linkCar }) {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">Precio: {price}</small>
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <Link to={linkBuy} className="btn btn-outline-success">
                <i className="bi bi-whatsapp" /> Comprar
              </Link>
              <Link to={linkCar} className="btn btn-outline-success">
                <i className="bi bi-basket2" /> Agregar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
