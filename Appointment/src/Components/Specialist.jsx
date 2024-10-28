import { Link } from "react-router-dom";
import { specialistData } from "../assets/assets_frontend/assets";
import "./Specialist.css";
function Specialist() {
  return (
    <div className="specialistContainer">
      <h1>Find by Specialist</h1>
      <p>
        Simple brows through our extensive list of trusted Specialist, schedule
        your appointment with hassle free.
      </p>
      <div className="specialist" id="specialist">
        {specialistData.map((specialist, index) => (
          <Link
            to={`/doctors/${specialist.speciality}`}
            key={index}
            onClick={() => scrollTo(0, 0)}
          >
            <div className="specialistMenu">
              <img
                src={specialist.image}
                alt="
              specialist"
              />
              <h1>{specialist.speciality}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Specialist;

{
  /* <img src={"mathew"} alt="" />
          <h1>General physician</h1> */
}
