import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";

const Home = ({ pizzas }) => {
  return (
    <div>
      <Header />
      <div className="bg-dark text-light pt-4 pb-4">
        <div className="container">
          <div className="row">
            {pizzas.map((pizza) => (
              <div className="col-md-4 pt-4" key={pizza.id}>
                <CardPizza pizzas={pizza} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
