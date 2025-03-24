import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chef, Footer, Gallery, Header, Intro, Laurels } from "./container";
import Welcome from "./container/Welcome/Welcome.jsx";
import { Navbar } from "./components";
import About from "./container/AboutUs/AboutUs";
import Contact from "./container/Findus/FindUs";
import Menu from "./container/Menu/SpecialMenu";
import Service from "./container/Service/service";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define Routes for Different Pages */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Welcome/>
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
