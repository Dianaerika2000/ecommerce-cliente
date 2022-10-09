import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-remasterizado.png';
export default function NavBarMenu({ opciones }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navBar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src={logo} alt="logo del restaurante" width="60" height="50" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
