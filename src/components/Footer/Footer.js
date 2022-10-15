const sucursales = [
  {
    name: 'Sucursal Central',
    location:
      'https://www.google.es/maps/place/Comida+Tipica+Suares/@-17.7753914,-63.1742876,17z/data=!3m1!4b1!4m5!3m4!1s0x93f1e87642438a15:0x52e0096691009f13!8m2!3d-17.7753914!4d-63.1720989?hl=es',
  },
  {
    name: "Sucursal El Cristo ",
    location: "https://www.google.es/maps/place/Comida+t%C3%ADpica+Su%C3%A1rez/@-17.770028,-63.1748066,17z/data=!3m1!4b1!4m5!3m4!1s0x93f1e754167dc845:0xa79460471b528a92!8m2!3d-17.7700181!4d-63.1726171?hl=es"
  },
  {
    name: "Sucursal este, Pampa de la Isla Carretera a Cotoca",
    location: "https://www.google.es/maps/place/Comida+T%C3%ADpica+Su%C3%A1rez+(Este)/@-17.7677522,-63.1306539,15z/data=!4m9!1m2!2m1!1sComida+t%C3%ADpica+Su%C3%A1rez+avenida+banzer!3m5!1s0x93f1e91968546edb:0x318077fc0fbf4904!8m2!3d-17.7677522!4d-63.1131444!15sCiVDb21pZGEgdMOtcGljYSBTdcOhcmV6IGF2ZW5pZGEgYmFuemVyWiciJWNvbWlkYSB0w61waWNhIHN1w6FyZXogYXZlbmlkYSBiYW56ZXKSAQpyZXN0YXVyYW504AEA?hl=es"
  },
  {
    name: "Sucursal sur, Santos Dumont",
    location: "https://www.google.es/maps/place/Comida+T%C3%ADpica+Su%C3%A1rez+-+Sucursal+Sur+-+Santos+Dumont/@-17.8156974,-63.2005932,15z/data=!4m9!1m2!2m1!1sComida+t%C3%ADpica+Su%C3%A1rez+avenida+banzer!3m5!1s0x93f1e9a7fa6a10d5:0x9556b8c9a01628b9!8m2!3d-17.8156974!4d-63.1830837!15sCiVDb21pZGEgdMOtcGljYSBTdcOhcmV6IGF2ZW5pZGEgYmFuemVyWiciJWNvbWlkYSB0w61waWNhIHN1w6FyZXogYXZlbmlkYSBiYW56ZXKSAQpyZXN0YXVyYW504AEA?hl=es"
  },
  {
    name: "Sucursal norte Av.Banzer",
    location: "https://www.google.es/maps/place/Comida+T%C3%ADpica+Suarez+-+Norte/@-17.7392152,-63.1737665,15.74z/data=!4m9!1m2!2m1!1sComida+t%C3%ADpica+Su%C3%A1rez+avenida+banzer!3m5!1s0x93f1e7713a643fc1:0xdf02534ba26f1c0d!8m2!3d-17.7376177!4d-63.1648373!15sCiVDb21pZGEgdMOtcGljYSBTdcOhcmV6IGF2ZW5pZGEgYmFuemVyWiciJWNvbWlkYSB0w61waWNhIHN1w6FyZXogYXZlbmlkYSBiYW56ZXKSAQpyZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJsZUhWTU9VdDNFQUXgAQA?hl=es"
  },
  {
    name: "",
    location: ""
  },
  {
    name: "",
    location: ""
  },
];
export default function Footer({ handlerClickEnviarMensaje }) {
  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-2  border-end">
          <div className="row text-center">
            <h5>Nuestras redes sociales</h5>
            <div className="col">
              <a href="https://www.facebook.com/comidatipicasuarez" target="__blank">
                <i className="bi bi-facebook custom-icon"></i>
              </a>
            </div>
            <div className="col">
              <a href="https://www.instagram.com/comidatipicasuarez" target="__blank">
                <i className="bi bi-instagram custom-icon"></i>
              </a>
            </div>
            <div className="col">
              <a href="https://www.instagram.com/comidatipicasuarez" target="__blank">
                <i className="bi bi-twitter custom-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <h5 className="pt-2">Sucursales</h5>
          <p className="justificado">
            <a href={sucursales[0].location} className="text-decoration-none text-dark" target="__blank">{sucursales[0].name}</a><br/>
            <a href={sucursales[1].location} className="text-decoration-none text-dark" target="__blank">{sucursales[1].name}</a><br />
            <a href={sucursales[2].location} className="text-decoration-none text-dark" target="__blank">{sucursales[2].name}</a><br />
            <a href={sucursales[3].location} className="text-decoration-none text-dark" target="__blank">{sucursales[3].name}</a><br />
            <a href={sucursales[4].location} className="text-decoration-none text-dark" target="__blank">{sucursales[4].name}</a><br />
          </p>
        </div>
        <div className="col-3 border-start border-end">
          <h5>Contactanos</h5>
          <p>
            <span>
              <i className="bi bi-telephone-fill" />
              &nbsp; 70878887
            </span>
            <span>
              <br />
              <i className="bi bi-envelope-fill" />
              &nbsp; comidatipicasuarez19@gmail.com
            </span>
            <br />
            <span>
              <i className="bi bi-whatsapp" onClick={handlerClickEnviarMensaje}>
                {' '}
                +591 62023311
              </i>
            </span>
          </p>
        </div>
        <div className="col-2">
          <h5>Horarios de atencion</h5>
          <p>
            Lunes - Domingos <br />
            Horario: 11:00 am - 22:30 pm
          </p>
        </div>
      </div>
    </div>
  );
}
