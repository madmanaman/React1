import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  //array pizzas obtenidas de la API
  const [pizzas, setPizzas] = useState([]);

  // Estado para manejar el carrito
  const [cart, setCart] = useState([]);

  // Estado precio total
  const [totalPrice, setTotalPrice] = useState(0);

  //Estados login
  const [userEmail, setEmail] = useState("");
  const [token, setToken] = useState(null);
  //estaod perfil
  const [user, setUser] = useState(null);

  //Funcion login
  const handleLogin = async (emailInput, passwordInput) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: emailInput,
          password: passwordInput,
        }
      );
      setToken(response.data.token);
      setEmail(emailInput);
      setUser({ email: emailInput });
      localStorage.setItem("token", response.data.token);
      alert("Correctamente logueado");
    } catch (error) {
      console.error("Error durante el login", error);
      alert("Error durante el login");
    }
  };

  //Funcion register
  const handleRegister = async (emailInput, passwordInput) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: emailInput,
          password: passwordInput,
        }
      );
      setToken(response.data.token);
      setEmail(emailInput);
      localStorage.setItem("token", response.data.token);
      alert("Registrado correctamente");
    } catch (error) {
      console.error("Error durante el login", error);
      alert("Error durante el registro");
    }
  };

  //user perfil

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    };
    getUser();
  }, []);

  //logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // O elimina cualquier otro almacenamiento de sesión
    setUser(null); // Limpia el estado del usuario
    setToken(null); // Limpia el token
    alert("Sesión cerrada");
  };

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
  const handleClearCart = () => {
    setCart([]); // Limpia el carrito
    setTotalPrice(0); // Restablece el precio total
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        cart,
        totalPrice,
        token,
        user,
        handleLogout,
        addPizzaToCart,
        removePizzaFromCart,
        handleLogin,
        handleRegister,
        handleClearCart,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
