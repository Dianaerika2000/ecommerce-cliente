import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FoodPage from './pages/FoodPage/FoodPage';

// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import NavBarMenu from './components/NavBar/NavBarMenu';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  // options
  let arNavBarOption = [
    { option: 'Home', to: '/' },
    { option: 'Acerca de nosotros', to: '/aboutus' },
  ];

  return (
    <BrowserRouter>
      <NavBarMenu opciones={arNavBarOption} />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="food">
            <Route path=":foodId" element={<FoodPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
