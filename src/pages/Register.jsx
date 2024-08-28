import React from "react";
import { useState } from "react";
const Register = () => {
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
    if (datos.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (datos.confirmPassword != datos.password) {
      alert("Password y su confirmación no son iguales");
      return;
    }
    {
      alert("Te haz registrado correctamente");
      setDatos({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <h1 className="pt-4">Registrate</h1>
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
            <div
              id="passwordHelpBlock"
              className="form-text"
              hidden={datos.password.length > 5}
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
              value={datos.confirmPassword}
              name="confirmPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={actualizarFormulario}
            ></input>
            <div
              id="passwordHelpBlock"
              className="form-text"
              hidden={datos.password === datos.confirmPassword}
              style={{ color: "red" }}
            >
              Password y su confirmación no son iguales
            </div>
          </div>
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

export default Register;
