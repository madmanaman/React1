import React from "react";
import { useState } from "react";

const Login = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const actualizarFormulario = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert("Te haz logeado correctamente");
    setDatos({
      email: "",
      password: "",
    });
  };
  return (
    <div className="bg-dark text-light">
      <div className="container ">
        <h1 className="pt-4">Login</h1>
        <form onSubmit={enviarFormulario}>
          <div className="mb-3 pt-4">
            <h4 htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </h4>
            <input
              required
              type="email"
              className="form-control"
              value={datos.email}
              name="email"
              placeholder="email@ejemplo.com"
              onChange={actualizarFormulario}
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
              value={datos.password}
              aria-describedby="passwordHelpBlock"
              onChange={actualizarFormulario}
            ></input>
          </div>
          <br />
          <div className="col-auto pt-4">
            <button
              type="submit"
              className="btn btn-outline-success mb-4"
              disabled={datos.password.length < 6}
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
