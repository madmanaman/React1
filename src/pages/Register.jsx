import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput.jsx";
import { PizzaContext } from "../context/PizzasContext";

const Register = () => {
  const { handleRegister } = useContext(PizzaContext);
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const enviarForm = (e) => {
    e.preventDefault();
    if (password.value.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    } else if (confirmPassword.value != password.value) {
      alert("Password y su confirmación no son iguales");
      return;
    } else {
      handleRegister(email.value, password.value);
    }
  };
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <h1 className="pt-4">Registrate</h1>
        <form onSubmit={enviarForm}>
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
            <div
              id="passwordHelpBlock"
              className="form-text"
              hidden={password.value.length > 5}
              style={{ color: "red" }}
            >
              El password debe tener al menos 6 caracteres
            </div>
          </div>
          <br />
          <div className="pt-4">
            <h4 htmlFor="inputPassword5" className="form-label">
              Confirmar contraseña
            </h4>
            <input
              required
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              {...confirmPassword}
            ></input>
            <div
              id="passwordHelpBlock"
              className="form-text"
              hidden={password.value === confirmPassword.value}
              style={{ color: "red" }}
            >
              Password y su confirmación no son iguales
            </div>
          </div>
          <div className="col-auto pt-4 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-outline-success mb-4"
              disabled={password.length < 6}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
