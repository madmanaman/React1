import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  console.log(pizza);

  const obtenerArray = async () => {
    const respuesta = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await respuesta.json();
    setPizza(data);
    console.log(pizza);
  };
  useEffect(() => {
    obtenerArray();
  }, []);

  const price = pizza.price ? Number(pizza.price) : 0;
  const precioFormateado = formatNumber(price);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card bg-light col-md-4 m-3">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p>{pizza.desc} </p>
          <hr />
          <h6 className="text-center">Ingredientes:</h6>
          <p className="card-text text-center">
            <FontAwesomeIcon icon={faPizzaSlice} />{" "}
            {pizza.ingredients &&
              pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </p>
          <hr />
          <h6>Precio: ${precioFormateado}</h6>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
