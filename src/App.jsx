import React from "react";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="m-2">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
