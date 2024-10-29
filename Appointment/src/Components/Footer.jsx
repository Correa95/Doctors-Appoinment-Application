import { assets } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="logo">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
            blanditiis fugiat porro reprehenderit, est facere dolorum qui
            corporis iusto voluptate, cumque omnis explicabo obcaecati labore
            voluptatem minima praesentium perspiciatis provident consequuntur!
            Quae exercitationem laborum provident iure deserunt odio labore.
          </p>
        </div>
        <div className="mission">
          <h1>Compony</h1>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1>Get IN Touch</h1>
          <ul>
            <li>Phone: 1+ 555 555 5555</li>
            <li>Email: prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="copyRight">
        <small> Copyright 2024@ Prescripto - All Right Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
