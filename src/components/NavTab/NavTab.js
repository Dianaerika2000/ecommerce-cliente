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
    console.log("resultado obtenido: ",result);
    // setFoods(result);
    // console.log("Food", foods);
    setFoodFilter(result);
    console.log("Food Filter",foodsfilter);
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
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                onClick={() => {
                  onClick('Platos típicos');
                }}
              ><span class="material-symbols-outlined">
              restaurant
              </span>&nbsp;
                Platos tipicos
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
              ><span class="material-symbols-outlined">
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
              ><span class="material-symbols-outlined">
              liquor
              </span>&nbsp;
              Refrescos
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex={'0'}
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
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex={'0'}
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
              tabindex={'0'}
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
