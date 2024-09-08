import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faKey,
  faLock,
  faLockOpen,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { PizzaContext } from "../context/PizzasContext"; // Importamos el contexto

const Navbar = () => {
  const token = false;

  // Usamos el contexto para obtener el totalPrice
  const { totalPrice } = useContext(PizzaContext);

  // Formatear el total para que aparezca con separador de miles
  const totalFormateado = totalPrice.toLocaleString("es-ES");

  let espacio = " ";

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Pizzería Mamma Mia!
          </Link>
          <form className="d-flex container-fluid justify-content-start">
            <div className="d-flex me-auto">
              <Link to="/">
                <button className="btn btn-outline-success me-2" type="button">
                  <FontAwesomeIcon icon={faPizzaSlice} />
                  {espacio} Home
                </button>
              </Link>

              {token ? (
                <>
                  <Link to="profile">
                    <button
                      className="btn btn-outline-success me-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLockOpen} />
                      {espacio} Profile
                    </button>
                  </Link>

                  <Link to="/">
                    <button
                      className="btn btn-outline-success me-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLock} /> {espacio} Logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-success me-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faKey} />
                      {espacio} Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      className="btn btn-outline-success me-2"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faKey} /> Register
                    </button>
                  </Link>
                </>
              )}
            </div>
            <Link to="/cart">
              <button className="btn btn-outline-success" type="button">
                <FontAwesomeIcon icon={faCartShopping} />
                {espacio} Total: ${totalFormateado} {/* Total dinámico */}
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
