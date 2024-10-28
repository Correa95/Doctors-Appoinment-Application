// import { assets } from "../assets/assets_frontend";
import "./HomeContent.css";
function HomeContent() {
  return (
    <main className="homeContent">
      <div className="content">
        <p>
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="main">
          <img src={"MATHEW"} alt="" />
          <h3>
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </h3>
        </div>
        <a href="#specialist">
          <button>
            Book Appointment
            <img src={"MATHEW"} alt="" />
          </button>
        </a>
      </div>
      <div className="images">
        <img src={"MATHEW"} alt="" />
      </div>
    </main>
  );
}

export default HomeContent;
