import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzasContext";

const Profile = () => {
  const { handleLogout, user } = useContext(PizzaContext);

  return (
    <div className="container mt-5">
      {user ? (
        <>
          <div className="row"></div>
          <div className="col-md-8">
            <h1>{user.email}</h1>
          </div>

          <Link to="/">
            <button
              className="btn btn-outline-success me-2 mb-2"
              type="button"
              onClick={() => handleLogout()}
            >
              Cerrar Sesión
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1>No has iniciado sesión</h1>
          <Link to="/login">
            <button className="btn btn-outline-success me-2 mb-2" type="button">
              Iniciar Sesión
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
