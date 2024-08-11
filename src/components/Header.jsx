import React from "react";
import pizza from "../assets/img/pizza.png";

function Header() {
  return (
    <div className="bg-dark text-light">
      <div className="card text-bg-dark">
        <img
          src={pizza}
          className="card-img opacity-25"
          alt="..."
          style={{ height: "200px" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h1 className="card-title">¡Pizzería Mamma Mia!</h1>
          <p className="card-text center">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
