import { useEffect, useState } from 'react';
import { api } from '../../config/site.config';
import CardHorizontal from '../Card/CardHorizontal';
export default function NavTab() {
  // states
  const [foodsfilter, setFoodFilter] = useState([]);
  const [foods, setFoods] = useState([]);
  // init
  useEffect(() => {
    api
      .get('https://training.melian.me/backend-ecommerce/api/products/57/getAll')
      .then((response) => {
        setFoods(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  // handler
  const onClick = (categoria) => {
    const result = foods.filter((food) => {
      const category = food.categories[0];
      return category.category_name === categoria;
    });
    setFoodFilter(result);
  };

  // render
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
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
              ><span className="material-symbols-outlined">
              restaurant_menu
              </span>&nbsp;
                Menu
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="plate-tab"
                data-bs-toggle="tab"
                data-bs-target="#plate-tab-pane"
                type="button"
                role="tab"
                aria-controls="plate-tab-pane"
                aria-selected="false"
                onClick={() => {
                  onClick('Platos típicos');
                }}
              ><span className="material-symbols-outlined">
              restaurant
              </span>&nbsp;
               Platos típicos
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                onClick={() => {
                  onClick('Postres');
                }}
              ><span className="material-symbols-outlined">
              icecream
              </span>&nbsp;
                Postres
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                onClick={() => {
                  onClick('Refrescos');
                }}
              ><span className="material-symbols-outlined">
              liquor
              </span>&nbsp;
              Refrescos
              </button>
            </li>
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
            <div
              className="tab-pane fade"
              id="plate-tab-pane"
              role="tabpanel"
              aria-labelledby="plate-tab"
            >
              {foodsfilter.map((food, index) => {
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
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {foodsfilter.map((food, index) => {
                return (
                  <CardHorizontal
                    title={food.product_name}
                    description={food.product_description}
                    price={food.product_price}
                    image={food.product_image}
                    linkBuy={''}
                    linkCar={''}
                    key={index}
                  />
                );
              })}
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              {foodsfilter.map((food, index) => {
                return (
                  <CardHorizontal
                    title={food.product_name}
                    description={food.product_description}
                    price={food.product_price}
                    image={food.product_image}
                    linkBuy={''}
                    linkCar={''}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
