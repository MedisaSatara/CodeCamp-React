import React, { useEffect, useState } from "react";
import { Zadaca1AgeChecker } from "./Zadaca1AgeChecker";
import { Zadaca1TempChecker } from "./Zadaca1TempChecker";
import { Zadaca1LoginInfo } from "./Zadaca1LoginInfo";
import { Zadaca1NameShow } from "./Zadaca1NameShow";
import { Zadaca1UserInfo } from "./Zadaca1UserInfo";
import { Zadaca1NameNiz } from "./Zadaca1NameNiz";
import { UserList } from "./UserList";
import { InputForm } from "./InputForm";
import { CounterCheck } from "./CounterChecker";
import { Zadaca2Checkbox } from "./Zadaca2Checkbox";
import { Zadaca2ButtonsForCount } from "./Zadaca2ButtonsForCount";
import { PrimjerUseeffect } from "./PrimjerUseeffect";
import { Zadaca3Tasks } from "./Zadaca3Tasks";

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
      <Zadaca1AgeChecker age={20} />
      <Zadaca1TempChecker temp={18.5} />
      <Zadaca1LoginInfo isLoggedIn={false} />
      <Zadaca1NameShow name="Medisa Satara" />
      <Zadaca1UserInfo ime="Medisa" prezime="Satara" godinaRodjenja={1998} />
      <Zadaca1NameNiz />
      <UserList />
      <CounterCheck />
      <br />
      <br />
      <InputForm />
      <Zadaca2Checkbox />
      <Zadaca2ButtonsForCount />
      <PrimjerUseeffect />
      <br />
      <Zadaca3Tasks />
    </div>
  );
};
