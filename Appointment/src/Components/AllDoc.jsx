// import { useContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";
import { doctors } from "../assets/assets_frontend/assets";
import "./AllDoc";

function AllDoc() {
  //   const { speciality } = useParams();
  //   const [filterDoctors, setFilterDoctors] = useState([]);
  return (
    <main className="allDoctorsContainer">
      <h1>Browse through the doctors specialist.</h1>
      <div className="doctorFilter">
        <ul>
          <li>General Physician</li>
          <li>Gynecologist</li>
          <li>Dermatologist</li>
          <li>Pediatricians</li>
          <li>Neurologist</li>
          <li>Gastroenterologist</li>
        </ul>
      </div>
      <div className="filterDoctorsContainer">
        {doctors.map((doc, index) => (
          <div
            className="filterDoctorsCard"
            key={index}
            // onClick={() => navigate(`/appointment/${doctor.id}`)}
          >
            <img src={doc.image} alt="Doctor Image" />
            <div className="available">
              <p></p>
              <small>Available</small>
            </div>
            <h1>{doc.name}</h1>
            <h3>{doc.speciality}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AllDoc;
