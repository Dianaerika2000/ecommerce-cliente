import { useEffect, useState } from 'react';
import CardHorizontal from '../../components/Card/CardHorizontal';
import { api } from '../../config/site.config';
export default function MenuPage({handleAdd, handleBuy}) {
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
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-8">
         <h2 className="text-center mb-5">Nuestro Menu</h2>
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
                    {category.category_name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="tab-content my-3" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="foods-tab-pane"
              role="tabpanel"
              aria-labelledby="foods-tab"
            >
              {foods.map((food, index) => {
                return (
                  <CardHorizontal
                    key={index}
                    product={food}
                    handleAdd={handleAdd}
                    handleBuy={handleBuy}
                    linkSee={'/food/' + food.id}
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
                      <CardHorizontal
                      key={index} 
                      product={product}
                      handleAdd={handleAdd}
                      handleBuy={handleBuy}
                      linkSee={'/food/' + product.id}
                      />
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

