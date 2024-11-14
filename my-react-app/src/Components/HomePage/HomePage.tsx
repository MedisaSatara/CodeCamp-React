import React, { FC, useEffect, useState } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { title } from "process";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  function handleButton() {
    navigate("/register");
  }
  const [id, setId] = useState(2);
  const [podatak, setPodatak] = useState({
    body: "",
    id: null,
    title: "",
    userId: null,
  });

  function getData() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setPodatak(data));
  }

  function idData(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 100) {
      setId(value);
    }
  }
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="home-page">
      <div className="welcomeDiv">
        <h1>Dobrodosli!</h1>
        <button onClick={handleButton}>Registracija</button>
        <input
          type="number"
          value={id}
          onChange={idData}
          min={1}
          max={100}
          placeholder="Unesi id"
        />
        <button onClick={getData}>Podaci</button>
        <p>{podatak.body}</p>
        <p>{podatak.id}</p>
        <p>{podatak.title}</p>
        <p>{podatak.userId}</p>
      </div>
    </div>
  );
};
