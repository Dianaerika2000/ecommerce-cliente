import { useEffect, useState } from 'react';
import { api } from '../../config/site.config';
import CardHorizontal from '../Card/CardHorizontal';
export default function NavTabCardHorizontal({handleAdd}) {
  // states
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  // functions
  const loadCategories = () => {
    api
      .get('categories/57/getAll')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error));
  };
  const loadProductsByCategory = (id) => {
    api
      .get('/categories/57/products/' + id)
      .then((response) => {
        setProductsByCategory(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => console.log(error));
  };
  // init
  useEffect(() => {
    loadCategories();
    api
      .get('https://training.melian.me/backend-ecommerce/api/products/57/getAll')
      .then((response) => {
        setFoods(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  // render
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
         <h2 className="text-center">Nuestro Menu</h2>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="foods-tab"
                data-bs-toggle="tab"
                data-bs-target="#foods-tab-pane"
                type="button"
                role="tab"
                aria-controls="foods-tab-pane"
                aria-selected="true"
              >
                <span className="material-symbols-outlined">restaurant_menu</span>&nbsp; Menu
              </button>
            </li>
            {categories.map((category, index) => {
              return (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className="nav-link"
                    id={`${category.category_name}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${category.category_name}-tab-pane`}
                    type="button"
                    role="tab"
                    aria-controls={`${category.category_name}-tab-pane`}
                    aria-selected="false"
                    onClick={() => {
                      loadProductsByCategory(category.id);
                    }}
                  >
                    <span className="material-symbols-outlined">restaurant</span>&nbsp;
                    {category.category_name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="foods-tab-pane"
              role="tabpanel"
              aria-labelledby="foods-tab"
            >
              {foods.map((food, index) => {
                return (
                  <CardHorizontal
                    title={food.product_name}
                    description={food.product_description}
                    price={food.product_price}
                    image={food.product_image}
                    item={food}
                    linkBuy={''}
                    linkCar={''}
                    key={index}
                  />
                );
              })}
            </div>
            {categories.map((category, index) => {
              return (
                <div
                  className="tab-pane fade"
                  id={`${category.category_name}-tab-pane`}
                  role="tabpanel"
                  aria-labelledby={`${category.category_name}-tab`}
                  key={index}
                >
                  {productsByCategory.map((product, index) => {
                    return (
                      <div className="card mb-3" key={index}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={product.product_image}
                              className="img-fluid rounded-start"
                              alt={product.product_name}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{product.product_name}</h5>
                              <p className="card-text">{product.product_description}</p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Precio: {product.product_price}
                                </small>
                              </p>
                              <div className="btn-group" role="group" aria-label="Basic example">
                                <button className="btn btn-outline-success">
                                  <i className="bi bi-whatsapp" /> Comprar
                                </button>
                                <button className="btn btn-outline-success"
                                onClick={() => handleAdd(product)}>
                                  <i className="bi bi-basket2" /> Agregar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
