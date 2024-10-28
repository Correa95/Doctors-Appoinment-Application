import { assets } from "../assets/assets_frontend/assets";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="logo">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
          blanditiis fugiat porro reprehenderit, est facere dolorum qui corporis
          iusto voluptate, cumque omnis explicabo obcaecati labore voluptatem
          minima praesentium perspiciatis provident consequuntur! Quae
          exercitationem laborum provident iure deserunt odio labore.
        </p>
      </div>
      <div className="mission"></div>
      <div className="contact"></div>
    </footer>
  );
}

export default Footer;
