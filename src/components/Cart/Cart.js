import { useEffect, useState } from 'react';
import { storageSave } from '../../services/storage';

export default function Cart({ cart, setCart, handleAdd, handleSubtract }) {
  // states
  const [total, setTotal] = useState(0);

  // handle
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    storageSave('cart_list', arr);
  };
  
  // init
  useEffect(() => {
    let total = 0;
    cart.map((item) => (total += item.quantity * parseInt(item.product_price)));
    setTotal(total);
  }, [cart]);

  // render
  return (
    <div className="container text-center">
      {cart?.map((item, index) => {
        return (
          <div className="row justify-content-center align-items-center my-2" key={index}>
            <div className="col-1">
              <img src={item.product_image} className="img-fluid" alt={item.product_name}></img>
            </div>
            <div className="col-2">
              <p>{item.product_name}</p>
            </div>
            <div className="col-2">
              <p>Precio unidad: {item.product_price}</p>
            </div>
            <div className="col-2">
              <button className="btn btn-success" onClick={() => handleSubtract(item)}>
                -
              </button>
              &nbsp;{item.quantity}&nbsp;
              <button className="btn btn-success" onClick={() => handleAdd(item)}>
                +
              </button>
            </div>
            <div className="col-1">
              <button className="btn btn-success" onClick={() => handleRemove(item.id)}>
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
      <div className="row justify-content-evenly">
        <div className="col-2">
          <p>Total a cancelar: {total}</p>
        </div>
      </div>
    </div>
  );
}
