import { useNavigate } from "react-router-dom";
import "./Banner.css";
function Banner() {
  const navigate = useNavigate();
  return (
    <section className="bannerContainer">
      <div className="bannerContent">
        <p>
          Book Appointment <br />
          With 100+ Trusted Doctors
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
          >
            Create account
          </button>
        </p>
      </div>
      <div className="bannerImage">
        <img src={"MATHEW"} alt="MATHEW" />
      </div>
    </section>
  );
}

export default Banner;
