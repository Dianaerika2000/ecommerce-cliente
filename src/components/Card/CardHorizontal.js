import { Link } from "react-router-dom";

export default function CardHorizontal({ product, handleBuy, handleAdd, linkSee }) {
  const { product_name, product_description, product_image, product_price } = product;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product_image} className="img-fluid rounded-start" alt={product_name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product_name}</h5>
            <p className="card-text">{product_description}</p>
            <p className="card-text">
              <small className="text-muted">Precio: {product_price}</small>
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                to=""
                className="btn btn-outline-success"
                onClick={() => {
                  handleAdd(product);
                }}
              >
                <i className="bi bi-basket2" /> Agregar
              </button>
              <button className="btn btn-outline-success" onClick={handleBuy}>
                <i className="bi bi-whatsapp" /> Comprar
              </button>
              <Link className="btn btn-outline-success" to={linkSee}>
                <i className="bi bi-eye" /> Ver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
