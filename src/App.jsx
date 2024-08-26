//import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import Home from "./components/Home";
import Footer from "./components/Footer";
//import Register from "./components/Register";
//import Login from "./components/Login";
//import Cart from "./components/Cart.jsx";
import { useEffect, useState } from "react";
import Pizza from "./components/Pizza.jsx";

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
      <Pizza />
      <Footer />
      {/*<Pizza />*/}
      {/*<Home pizzas={pizzas} />*/}
      {/*<Cart pizzas={pizzas} />*/}
      {/*<Login />*/}
      {/* <Register />*/}
    </>
  );
};

export default App;
