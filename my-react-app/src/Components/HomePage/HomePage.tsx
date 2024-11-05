import React, { FC } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  function handleButton() {
    navigate("/register");
  }

  return (
    <div className="home-page">
      <div className="welcomeDiv">
        <h1>Dobrodosli!</h1>
        <button onClick={handleButton}>Registracija</button>
      </div>
    </div>
  );
};
