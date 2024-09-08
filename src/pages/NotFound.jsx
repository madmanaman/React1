import React from "react";
import notFound from "../assets/img/notFound.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="card text-bg-dark">
        <img
          src={notFound}
          className="card-img opacity-50"
          alt="..."
          style={{ maxHeight: "90vh" }}
        />
        <div className="card-img-overlay ">
          <h1 className="card-title text-center">
            Te perdiste, mejor vamos por una pizza{" "}
            <Link to="/" className="" style={{ textDecoration: "none" }}>
              <span className="badge text-bg-info">🍕</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
