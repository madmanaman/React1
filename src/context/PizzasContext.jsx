import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  //estado pizzas obtenidas de la API
  const [pizzas, setPizzas] = useState([]);

  // Estado para manejar el carrito
  const [cart, setCart] = useState([]);

  // Estado precio total
  const [totalPrice, setTotalPrice] = useState(0);

  //  llamada a la API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    // Llamar a la función para obtener las pizzas
    fetchPizzas();
  }, []);

  // Función para agregar una pizza al carrito
  const addPizzaToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaExists = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });

    // Actualizar el precio total basado en su versión anterior
    setTotalPrice((prevTotal) => prevTotal + pizza.price);
  };

  // Función para eliminar una pizza del carrito
  const removePizzaFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const pizzaToRemove = prevCart.find((item) => item.id === pizzaId);
      if (pizzaToRemove.quantity > 1) {
        return prevCart.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== pizzaId);
      }
    });

    // Actualizar el precio total basado en su versión anterior
    setTotalPrice((prevTotal) => {
      const pizzaToRemove = cart.find((item) => item.id === pizzaId);
      return prevTotal - pizzaToRemove.price;
    });
  };

  return (
    <PizzaContext.Provider
      value={{ pizzas, cart, totalPrice, addPizzaToCart, removePizzaFromCart }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
