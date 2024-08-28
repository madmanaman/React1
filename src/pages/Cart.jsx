import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Cart = ({ pizzas }) => {
  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const añadir = (pizza) => {
    const newCart = { ...cart };
    if (newCart[pizza.id]) {
      newCart[pizza.id].quantity += 1;
    } else {
      newCart[pizza.id] = { ...pizza, quantity: 1 };
    }
    setCart(newCart);
    setTotalPrice(totalPrice + pizza.price);
  };

  const quitar = (pizza) => {
    const newCart = { ...cart };
    if (newCart[pizza.id] && newCart[pizza.id].quantity > 0) {
      newCart[pizza.id].quantity -= 1;
      setTotalPrice(totalPrice - pizza.price);
    }
    if (newCart[pizza.id].quantity === 0) {
      delete newCart[pizza.id];
    }
    setCart(newCart);
  };

  return (
    <div className="bg-dark text-light pt-4 pb-4">
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => {
            const price = Number(pizza.price);
            const precioFormateado = formatNumber(price);

            return (
              <div className="col-md-4 pt-4" key={pizza.id}>
                <div className="card bg-light" key={pizza.id}>
                  <img
                    src={pizza.img}
                    className="card-img-top"
                    alt={pizza.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <hr />
                    <h6>Precio: ${precioFormateado}</h6>

                    <h6>Cantidad: {cart[pizza.id]?.quantity || 0}</h6>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success border"
                        onClick={() => añadir(pizza)}
                      >
                        Añadir
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => quitar(pizza)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mt-4">
          <div className="col text-right">
            <h2>Total a pagar: ${formatNumber(totalPrice)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
