import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { PizzaContext } from "../context/PizzasContext";

// Función para formatear números con separadores de miles
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CardPizza = ({ pizza }) => {
  const price = Number(pizza.price);
  const precioFormateado = formatNumber(price); // formatea el precio

  // Accedemos a la función addPizzaToCart desde el contexto
  const { addPizzaToCart } = useContext(PizzaContext);

  return (
    <div>
      <div className="card bg-light">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <hr />
          <h6 className="text-center">Ingredientes:</h6>
          <p className="card-text text-center">
            <FontAwesomeIcon icon={faPizzaSlice} />{" "}
            {pizza.ingredients.join(", ")}
          </p>
          <hr />
          <h6>Precio: ${precioFormateado}</h6>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-light border">
              Ver Más <FontAwesomeIcon icon={faEye} />
            </a>

            <button
              className="btn btn-dark"
              onClick={() => addPizzaToCart(pizza)}
            >
              Añadir <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
