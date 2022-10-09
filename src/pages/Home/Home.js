import Slider from "../../components/Slider/Slider";

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <>
    <Slider/>
    <div className="container-fluid">
      <div className="row">
        <div className="col my-3">
          <h1>Home</h1>
        </div>
      </div>
    </div>
    </>
  );
}
