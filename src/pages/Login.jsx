import React, { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzasContext";
import useInput from "../hooks/useInput.jsx";
import axios from "axios";

const Login = () => {
  const { handleLogin } = useContext(PizzaContext);
  const email = useInput("");
  const password = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email.value, password.value); // Pasa los valores directamente
  };

  return (
    <div className="bg-dark text-light">
      <div className="container ">
        <h1 className="pt-4">Login</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3 pt-4">
            <h4 htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </h4>
            <input
              required
              type="email"
              className="form-control"
              value={email}
              name="email"
              placeholder="email@ejemplo.com"
              {...email}
            />
          </div>
          <div className="pt-4">
            <h4 htmlFor="inputPassword5" className="form-label">
              Contraseña
            </h4>
            <input
              required
              type="password"
              name="password"
              className="form-control"
              value={password}
              aria-describedby="passwordHelpBlock"
              {...password}
            ></input>
          </div>
          <br />
          <div className="col-auto pt-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-outline-success mb-4 center"
              disabled={password.value.length < 6}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
