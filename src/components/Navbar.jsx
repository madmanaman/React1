import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faKey,
  faLock,
  faLockOpen,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const total = 25000;
  const totalFormateado = total.toLocaleString("es-ES");
  const token = false;
  let espacio = " ";

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia!
          </a>
          <form className="d-flex container-fluid justify-content-start">
            <div className="d-flex me-auto">
              <button className="btn btn-outline-success me-2" type="button">
                <FontAwesomeIcon icon={faPizzaSlice} />
                {espacio} Home
              </button>

              {token ? (
                <>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faLockOpen} />
                    {espacio} Profile
                  </button>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faLock} /> {espacio} Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faKey} />
                    {espacio} Login
                  </button>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faKey} /> Register
                  </button>
                </>
              )}
            </div>

            <button className="btn btn-outline-success" type="button">
              <FontAwesomeIcon icon={faCartShopping} />
              {espacio} Total: ${totalFormateado}
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
