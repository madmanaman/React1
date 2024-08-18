//import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import Register from "./components/Register";
//import Login from "./components/Login";
import pizzas from "./pizzas.js";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart pizzas={pizzas} />
      {/*<Home pizzas={pizzas} />*/}
      {/*<Login />*/}
      {/* <Register />*/}
      <Footer />
    </>
  );
};

export default App;
