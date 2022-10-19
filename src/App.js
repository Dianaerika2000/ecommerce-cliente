
import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FoodPage from './pages/FoodPage/FoodPage';

// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import NavBarMenu from './components/NavBar/NavBarMenu';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import MenuPage from './pages/MenuPage/MenuPage';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import { storageDelete, storageGet, storageSave } from './services/storage';
import Footer from './components/Footer/Footer';

/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  // states
  const [cart, setCart] = useState([]);

  // handlers
  const handleAdd = (item) => {
    let existeItem = false;
    for (let i in cart) {
      if (cart[i].id === item.id) {
        let newItem = cart[i];
        newItem.quantity++;
        cart[i] = newItem;
        storageSave('cart_list', cart);
        setCart(storageGet('cart_list'));
        existeItem = true;
        break;
      }
    }
    if (existeItem === false) {
      let itemQuantity = { ...item, quantity: 1 };
      let newCart = [...cart, itemQuantity];
      setCart(newCart);
      storageSave('cart_list', newCart);
    }
  };

  const handleSubtract = (item) => {
    let newItems = [...cart];
    for (let i in cart) {
      if (cart[i].id === item.id) {
        newItems[i].quantity--;
        break;
      }
    }
    setCart(newItems);
    storageSave('cart_list', newItems);
  };

  const handlerClickEnviarMensaje = () => {
    let link = 'https://wa.me/59162023311?text=' + encodeURIComponent('Hola, me gustaria ver su menu');
    window.open(link);
  };

  const handlerClickBuy = () => {
    let items = storageGet('cart_list');
    const message = items.map((item) => {
      return item.quantity + " "+ item.product_name;
    })
    let link = 'https://wa.me/59171013332?text=' + encodeURIComponent(message.toString());
    setCart([]);
    storageDelete('cart_list');
    window.open(link);
  };

  // init
  useEffect(() => {
    let cart_list = storageGet('cart_list');
    if (!cart_list) {
      cart_list = [];
    }
    setCart(cart_list);
  }, []);

  // options
  let arNavBarOption = [
    { option: 'Home', to: '/' },
    { option: 'Menu', to: '/menu' },
    { option: 'Acerca de nosotros', to: '/aboutus' },
  ];
  return (
    <BrowserRouter>
      <NavBarMenu opciones={arNavBarOption} cart={cart} />
      <div className="App">
        <Routes>
          <Route index element={<Home handleClick={handleAdd} handlerClickBuy={handlerClickBuy}/>} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="food">
            <Route path=":foodId" element={<FoodPage handleAdd={handleAdd} handleBuy={handlerClickBuy}/>} />
          </Route>
          <Route path="menu" element={<MenuPage handleAdd={handleAdd} handleBuy={handlerClickBuy}/>}/>
        </Routes>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Carrito de compras
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Cart cart={cart} setCart={setCart} handleAdd={handleAdd} handleSubtract={handleSubtract} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" className="btn btn-success" onClick={handlerClickBuy}>
                Comprar por whatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-footer'>
        <Footer handlerClickEnviarMensaje={handlerClickEnviarMensaje}/>
      </footer>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
