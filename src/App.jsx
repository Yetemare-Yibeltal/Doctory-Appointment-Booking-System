import React from "react";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import {  } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Myprofile from "./Pages/Myprofile";
import Myappointment from "./Pages/Myappointment";
import Apointment from "./Pages/Apointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Doctors route */}
        <Route path="/doctors/:speciality" element={<Doctors />} />
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        {/* About route */}
        <Route path="/about" element={<About />} />
        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />
        {/* Myprofile route */}
        <Route path="/my-profile" element={<Myprofile />} />
        {/* Myappointment route */}
        <Route path="/my-appointment" element={<Myappointment />} />
        {/* Apointment route */}
        <Route path="/appointment/:docId" element={<Apointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
