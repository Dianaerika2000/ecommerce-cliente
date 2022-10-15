import { Link } from 'react-router-dom';

export default function CardProducto({ item, handleAddFood, linkBuy, linkVer }) {
  const { product_name, product_price, product_image } = item;
  return (
    <div className="card shadow border-white">
      <div className="card-header">
        <img src={product_image} className="card-custom mx-auto d-block" alt={product_name} />
      </div>
      <div className="card-body text-center text-dark rounded-bottom">
        <h5 className="card-title">
          {product_name}
        </h5>
        <p className="card-text fs-5  texto-card">Precio: {product_price} Bs.</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link to={linkBuy} className="btn btn-success">
            <i className="bi bi-whatsapp" /> Comprar
          </Link>
          <button className="btn btn-success"
          onClick={() => handleAddFood(item)}>
            <i className="bi bi-basket2" /> Agregar
          </button>
          <Link className="btn btn-success" to={linkVer}>
            <i className="bi bi-eye"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
