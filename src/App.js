import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FoodPage from './pages/FoodPage/FoodPage';


// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import NavBarMenu from './components/NavBar/NavBarMenu';

/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  // options
  let arNavBarOption = [
    {option: 'Home', to: '/'},
    {option: 'Menu', to: '/food'},
    {option: 'Contacto', to: '/food'},
    {option: 'Acerca de nosotros', to: '/food'}

  ];

  return (
    <BrowserRouter>
      <NavBarMenu opciones={arNavBarOption}/>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/food" element={<FoodPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
