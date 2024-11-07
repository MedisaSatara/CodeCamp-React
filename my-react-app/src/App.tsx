import React, { useEffect, useState } from "react";

import { PozivKomponenti } from "./ZadaciZaVjezbu/PozivKomponenti";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { WelcomePage } from "./Components/WelcomePage";
import { TodoList } from "./TodoApp/TodoList";
import { TodoItem } from "./TodoApp/TodoItem";

/*const App: React.FC = () => {
  const ime: string = "svijete";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pozdrav, {ime}</h1>
      </header>
    </div>
  );
};

export default App;*/

export const App: React.FC = () => {
  return (
    <div>
      {/*<PozivKomponenti />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
};
