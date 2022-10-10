import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../config/site.config';

export default function FoodPage() {
  // states
  const [plato, setPlato] = useState({});
  // init
  const { foodId } = useParams();
  useEffect(() => {
    api
      .get('https://training.melian.me/backend-ecommerce/api/products/getProduct/' + foodId)
      .then((response) => {
        setPlato(response.data.product);
      })
      .catch((error) => console.log(error));
  }, [foodId]);
  // render
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-5">
          <img src={plato.product_image} className="img-fluid" alt={plato.product_name} />
        </div>
        <div className="col-4">
          <h1>{plato.product_name}</h1>
          <p>
            <span className="fw-semibold">Descripcion:</span> {plato.product_description}
          </p>
          <p>
            <span className="fw-semibold">Precio:</span> {plato.product_price} Bs.
          </p>
          <div class="btn-group">
            <Link to="" class="btn btn-outline-success" aria-current="page">
              <i className="bi bi-whatsapp" /> Comprar
            </Link>
            <Link to="" class="btn btn-outline-success" aria-current="page">
              <i className="bi bi-basket2" /> Agregar
            </Link>
          </div>
          <div className="mt-3">
            <Link className="btn btn-success" to="/">
              <span class="material-symbols-outlined">restaurant</span> Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
