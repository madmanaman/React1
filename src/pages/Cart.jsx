import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PizzaContext } from "../context/PizzasContext";
import homero from "../assets/img/homero.gif";
import axios from "axios";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Cart = () => {
  const {
    cart,
    totalPrice,
    addPizzaToCart,
    removePizzaFromCart,
    user,
    handleClearCart,
    token,
  } = useContext(PizzaContext);

  const handleCheckout = async () => {
    try {
      // Envía los datos del carrito al backend
      const response = await axios.post(
        "http://localhost:5000/api/checkouts",
        {
          cart, // Envia el carrito como parte del cuerpo de la solicitud
          total: totalPrice, // El precio total del carrito
        },
        {
          headers: {
            "Content-Type": "application/json", // Tipo de contenido JSON
            Authorization: `Bearer ${token}`, // Incluye el token JWT
          },
        }
      );

      // Maneja la respuesta del servidor
      if (response.status === 200) {
        alert("Compra realizada con éxito");
        handleClearCart(); // Limpiamos el carrito después de la compra
      }
    } catch (error) {
      console.error("Error al enviar el carrito:", error);
      alert("Hubo un error al realizar la compra. Inténtalo de nuevo.");
    }
  };

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
          {totalPrice > 0 && user == null ? (
            <h2>Debes iniciar sesión para pagar.</h2>
          ) : user && totalPrice > 0 ? (
            <button
              className="btn btn-success me-2"
              type="button"
              onClick={handleCheckout}
              disable={cart.length === 0}
            >
              Pagar
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
