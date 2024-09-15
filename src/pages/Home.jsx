import React, { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzasContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <div>
      <Header />
      <div className="bg-dark text-light pt-4 pb-4">
        <div className="container">
          <div className="row">
            {pizzas.map((pizza) => (
              <div className="col-md-4 pt-4" key={pizza.id} value={pizza.id}>
                <CardPizza pizza={pizza}></CardPizza>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
