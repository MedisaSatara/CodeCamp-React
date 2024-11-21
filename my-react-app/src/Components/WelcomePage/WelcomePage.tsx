import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const WelcomePage: FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user, "user from firebase");
  useEffect(() => {
    //const currentUser = localStorage.getItem("currentUser");
    /*if (currentUser) {
      const userData = JSON.parse(currentUser);
      setEmail(userData.email);
    }*/
    if (user) {
      console.log("Welcome", user.email);
    }
  }, [user]);
  function Odjava() {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }
  async function odjava() {
    try {
      await signOut(auth);
      console.log("user logged out successufully");
      navigate("/login");
    } catch (error) {
      console.error("Error logged in", error);
    }
  }
  function handleTodoList() {
    if (user) {
      console.log("Welcome", user.email);
      navigate("/todolist");
    } else {
      console.log("User nije logiran");
      navigate("/login");
    }
  }
  return (
    <div className="welcome-page">
      {user ? (
        <>
          <nav>
            <button onClick={odjava}>Odjava</button>
          </nav>
          <div>
            <h1>Dobrodosli, {user?.email} </h1>
            <button onClick={handleTodoList}>Todo list</button>
          </div>
        </>
      ) : (
        <div>
          <h1>Dobrodosli, potrebno je da se logirate!</h1>
          <button onClick={handleTodoList}>Login</button>
        </div>
      )}
    </div>
  );
};
