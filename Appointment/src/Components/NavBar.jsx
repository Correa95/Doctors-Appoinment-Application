import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(true);
  function handleUserProfileMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
      </div>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="allDoctors">ALL DOCTORS</Link>
          </li>
          <li>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="btn">
        {/* <button>Admin Panel</button> */}
        {token ? (
          <div className="useProfile">
            <img src={"M C"} alt="Mario" />
            <h1 onClick={handleUserProfileMenu}>ICON</h1>
            {isOpen && (
              <div className="menuContainer">
                <div className="menu">
                  <p onClick={() => navigate("/myProfile")}>My Profile</p>
                  <p onClick={() => navigate("/myAppointments")}>
                    My Appointments
                  </p>
                  <p onClick={() => setToken(false)}>Log Out</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>Create Account</button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
