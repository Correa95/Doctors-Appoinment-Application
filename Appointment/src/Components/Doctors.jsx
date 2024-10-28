import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import "./Doctors.css";
// import { useContext } from "react";
// import { AppContext } from "../Context/AppContext";
function Doctors() {
  const navigate = useNavigate();
  // const { doctors } = useContext(AppContext);
  return (
    <section className="doctorsContainer">
      <h1>Top Doctors to Book</h1>
      <h3>Simply browse through our extensive list of trusted doctors.</h3>
      <div className="doctors">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            className="doctorsCard"
            key={index}
            onClick={() => navigate(`/appointment/${doctor.id}`)}
          >
            <img src={doctor.image} alt="Doctor Image" />
            <div className="available">
              <p></p>
              <small>Available</small>
            </div>
            <h1>{doctor.name}</h1>
            <h3>{doctor.speciality}</h3>
          </div>
        ))}
      </div>
      <button
        className="btnMore"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        More
      </button>
    </section>
  );
}

export default Doctors;
