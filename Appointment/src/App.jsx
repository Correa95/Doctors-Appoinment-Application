// import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import AllDoctors from "./Pages/AllDoctors";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import MyAppointments from "./Pages/MyAppointments";
import Appointment from "./Pages/Appointment";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allDoctors" element={<AllDoctors />} />
        <Route path="/allDoctors/:specialist" element={<AllDoctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myAppointments" element={<MyAppointments />} />
        <Route path="/appointment/Id" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
