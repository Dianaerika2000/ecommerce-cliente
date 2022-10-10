import historia from '../../assets/images/historia-restaurante.jpg';
export default function AboutUsPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-4">
          <h2 className="text-uppercase">Acerca de nosotros</h2>
        </div>
        <div className="col-5">
          <img src={historia} alt="historia del restaurante" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
