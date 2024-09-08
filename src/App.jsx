import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Footer from "./components/Footer.jsx";
import { PizzaProvider } from "./context/PizzasContext.jsx";

const App = () => {
  return (
    <>
      <PizzaProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/profile" element={<Profile />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </PizzaProvider>
      <Footer />
    </>
  );
};

export default App;
