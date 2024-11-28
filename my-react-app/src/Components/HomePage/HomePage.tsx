import React, { FC, useEffect, useState } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { title } from "process";
import HomePageImg from "../../slike/homepage.jpg";

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
      <nav className="nav-bar">
        <button onClick={handleButton}>Register</button>
      </nav>
      <div
        className="welcomeDiv"
        style={{ backgroundImage: `url(${HomePageImg})` }}
      >
        <h1>Welcome to My React App!</h1>
      </div>
      <div className="data-test">
        <h5>See test data from api url:</h5>
        <div className="insert-data">
          <input
            type="number"
            value={id}
            onChange={idData}
            min={1}
            max={100}
            placeholder="Unesi id"
          />
          <button onClick={getData}>Podaci</button>
        </div>
        <p>{podatak.body}</p>
        <p>{podatak.id}</p>
        <p>{podatak.title}</p>
        <p>{podatak.userId}</p>
      </div>
    </div>
  );
};
