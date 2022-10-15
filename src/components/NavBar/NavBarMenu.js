import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo-remasterizado.png';
export default function NavBarMenu({ opciones, cart }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navBar sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-success" to="">
          <span className="material-symbols-outlined custom-icon">restaurant</span>
          <h5 className="text-dark">Comida Típica Suarez</h5>
        </Link>
        {/* Button collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Nav content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {opciones.map((opcion, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link text-uppercase" to={opcion.to}>
                    {opcion.option}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <ul className='nav col-lg-auto m-2 justify-content-center my-md-0 text-small'>
                <li>
                  <a href="https://www.facebook.com/comidatipicasuarez" className="nav-link text-dark">
                    <i className="bi bi-facebook custom"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/comidatipicasuarez" className="nav-link text-dark">
                    <i className="bi bi-instagram custom"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/comidatipicasuarez" className="nav-link text-dark">
                    <i className="bi bi-twitter custom"></i>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- Button trigger modal --> */}
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-success position-relative"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
              >
                <i className="bi bi-basket2" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
