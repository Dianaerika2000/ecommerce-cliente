import { useEffect, useState } from 'react';
import CardProducto from '../../components/Card/CardProducto';
import Slider from '../../components/Slider/Slider';
import { api } from '../../config/site.config';

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  // states
  const [foods, setFoods] = useState();

  // init
  useEffect(() => {
    api
      .get('https://training.melian.me/backend-ecommerce/api/products/57/getAll')
      .then((response) => {
        setFoods(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  //render
  return (
    <>
      <Slider/>
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <h2 className="text-center">Nuestro Menu</h2>
          </div>
        </div>
        <div className="row">
          {foods?.map((food, index) => {
            return (
              <div className="col-3 mb-4" key={index}>
                <CardProducto
                  title={food.product_name}
                  image={food.product_image}
                  description={food.product_description}
                  price={food.product_price}
                  linkBuy="/"
                  linkCar="/"
                  linkVer={'/food/' + food.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
