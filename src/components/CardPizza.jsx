import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import pizzas from "../pizzas";

// Función para formatear números con separadores de miles
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CardPizza = ({ pizzas }) => {
  const price = Number(pizzas.price);
  const precioFormateado = formatNumber(price); //función personalizada para formatear el precio

  return (
    <div>
      <div className="card bg-light">
        <img src={pizzas.img} className="card-img-top" alt={pizzas.name} />
        <div className="card-body">
          <h5 className="card-title">{pizzas.name}</h5>
          <hr />
          <h6 className="text-center">Ingredientes:</h6>
          <ul className="card-text text-center">
            <FontAwesomeIcon icon={faPizzaSlice} />{" "}
            {pizzas.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <h6>Precio: ${precioFormateado}</h6>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-light border">
              Ver Más <FontAwesomeIcon icon={faEye} />
            </a>
            <a href="#" className="btn btn-dark">
              Añadir <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
