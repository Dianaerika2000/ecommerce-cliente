import { useEffect, useState } from 'react';
import CardProducto from '../../components/Card/CardProducto';
import Slider from '../../components/Slider/Slider';
import { api } from '../../config/site.config';

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home({handleClick, handlerClickBuy}) {
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
      <Slider />
      <div className="container">
        <div className="row my-4 justify-content-center">
          <div className="col-6">
            <h2 className="text-center">Nuestro Menu</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Búsqueda"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-success" type="button" id="button-addon2">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {foods?.map((food, index) => {
            return (
              <div className="col-3 mb-4" key={index}>
                <CardProducto
                  item={food}
                  handleAddFood={() => {handleClick(food)}}
                  handlerClickBuy={handlerClickBuy}
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
