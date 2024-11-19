import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";
import { useAuth } from "../../hooks/useAuth";

export const WelcomePage: FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const user = useAuth();
  console.log(user, "user from firebase");
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    /*if (currentUser) {
      const userData = JSON.parse(currentUser);
      setEmail(userData.email);
    }*/
    if (user) {
      console.log("Welcome", user.user?.email);
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
      <h1>Dobrodosli, {user.user?.email} </h1>
      <button onClick={handleTodoList}>Todo list</button>
    </div>
  );
};
