import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chef, Footer, Gallery, Header, Intro, Laurels } from "./container";
import Welcome from "./container/Welcome/Welcome.jsx";
import { Navbar } from "./components";
import About from "./container/AboutUs/AboutUs.jsx";
import Contact from "./container/Findus/FindUs";
import { OrderProvider } from "./components/OrderContext/OrderContext.jsx";
import Menu from "./container/Menu/menu";
import Service from "./container/Service/service";
import "./App.css";
import Order from "./container/Order/order.jsx";
import CartPreview from "./components/CartPreview/CartPreview";
import BookTable from "./components/BookTable/BookTable.jsx";

function App() {
  return (
    <OrderProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Welcome />
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
          <Route path="/order" element={<Order />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/book-table" element={<BookTable />} />
        </Routes>
        <CartPreview />
      </Router>
    </OrderProvider>
  );
}

export default App;
