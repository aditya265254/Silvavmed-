import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/footer/Footer";
import Loader from "./components/common/Loader";
import Mainnav from "./components/navbar/Mainnav";



const AppContent = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="m-2">
      {loading && <Loader />}
      <Mainnav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

const App = () => {
  return <AppContent />
}

export default App;