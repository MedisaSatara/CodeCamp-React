import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

export const WelcomePage: FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      setEmail(userData.email);
    }
  }, []);
  function Odjava() {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }
  function handleTodoList() {
    navigate("/todolist");
  }
  return (
    <div className="welcome-page">
      <nav>
        <button onClick={Odjava}>Odjava</button>
      </nav>
      <h1>Dobrodosli, {email} </h1>
      <button onClick={handleTodoList}>Todo list</button>
    </div>
  );
};
