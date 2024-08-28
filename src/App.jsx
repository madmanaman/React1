//import { useState } from "react";
import "./App.css";
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

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  const obtenerArray = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const data = await respuesta.json();
    setPizzas(data);
  };

  useEffect(() => {
    obtenerArray();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart pizzas={pizzas} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Pizza /> */}
      {/* <Pizza /> */}
      {/*<Pizza />*/}
      {/*<Home pizzas={pizzas} />*/}
      {/*<Cart pizzas={pizzas} />*/}
      {/*<Login />*/}
      {/* <Register />*/}
    </>
  );
};

export default App;
