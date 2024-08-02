import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// Función para formatear números con separadores de miles
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CardPizza = (props) => {
  const price = Number(props.price);
  const precioFormateado = formatNumber(price); // Utilizar la función personalizada para formatear el precio

  return (
    <div>
      <div className="card bg-light">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <hr />
          <h6 className="text-center">Ingredientes:</h6>
          <p className="card-text text-center">
            <FontAwesomeIcon icon={faPizzaSlice} />{" "}
            {props.ingredients.join(", ")}
          </p>
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
