import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PizzaContext } from "../context/PizzasContext";
import homero from "../assets/img/homero.gif";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Cart = () => {
  const { cart, totalPrice, addPizzaToCart, removePizzaFromCart } =
    useContext(PizzaContext);

  return (
    <div className="bg-dark text-light pt-4 pb-4">
      <div className="container">
        <div className="row">
          {cart.length === 0 ? (
            <div>
              <h2 className="text-center">No tienes pizzas en el carrito.</h2>
              <br />
              <img
                src={homero}
                className="card-img"
                alt="..."
                style={{ height: "500px" }}
              />
            </div>
          ) : (
            cart.map((pizza) => {
              const precioFormateado = formatNumber(pizza.price);

              return (
                <div className="col-md-4 pt-4" key={pizza.id}>
                  <div className="card bg-light">
                    <img
                      src={pizza.img}
                      className="card-img-top"
                      alt={pizza.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pizza.name}</h5>
                      <hr />
                      <h6>Precio: ${precioFormateado}</h6>
                      <h6>Cantidad: {pizza.quantity}</h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-success border"
                          onClick={() => addPizzaToCart(pizza)}
                        >
                          Añadir
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={() => removePizzaFromCart(pizza.id)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="row mt-4">
          <div className="col text-right">
            <h2>Total a pagar: ${formatNumber(totalPrice)}</h2>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
