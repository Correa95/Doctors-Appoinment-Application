import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { doctors } from "../assets/assets_frontend/assets";
import "./AllDoc.css";

function AllDoc() {
  const { speciality } = useParams();

  const [filterDoctors, setFilterDoctors] = useState([]);
  const navigate = useNavigate();

  const filterForSpecialist = () => {
    if (speciality) {
      setFilterDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctors(doctors);
    }
  };
  useEffect(() => {
    filterForSpecialist();
  }, [doctors, speciality]);

  return (
    <section className="allDoctorsContainer">
      <div className="doctorFilter">
        <h1>Browse through the doctors specialist.</h1>
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
        {filterDoctors.map((doc, index) => (
          <div
            className="filterDoctorsCard"
            key={index}
            onClick={() => navigate(`/appointment/${doc.id}`)}
          >
            <img src={doc.image} alt="Doctor Image" />

            <p>{doc.name}</p>
            <h3>{doc.speciality}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllDoc;
