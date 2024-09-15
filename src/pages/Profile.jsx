import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzasContext";

const Profile = () => {
  const { chancheToken } = useContext(PizzaContext);

  return (
    <div>
      <div className="container mt-5">
        <div className="row"></div>
        <div className="col-md-8">
          <h1>usuario@usuario.cl</h1>
        </div>

        <Link to="/">
          <button
            className="btn btn-outline-success me-2 mb-2"
            type="button"
            onClick={() => chancheToken()}
          >
            Cerrar Sesión
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
