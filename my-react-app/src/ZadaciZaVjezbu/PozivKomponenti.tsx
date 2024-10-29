import React from "react";
import { Zadaca1AgeChecker } from "../Zadace/Zadaca1AgeChecker";
import { Zadaca1TempChecker } from "../Zadace/Zadaca1TempChecker";
import { Zadaca1LoginInfo } from "../Zadace/Zadaca1LoginInfo";
import { Zadaca1NameShow } from "../Zadace/Zadaca1NameShow";
import { Zadaca1UserInfo } from "../Zadace/Zadaca1UserInfo";
import { Zadaca1NameNiz } from "../Zadace/Zadaca1NameNiz";
import { UserList } from "./UserList";
import { CounterCheck } from "./CounterChecker";
import { InputForm } from "./InputForm";
import { Zadaca2Checkbox } from "../Zadace/Zadaca2Checkbox";
import { Zadaca2ButtonsForCount } from "../Zadace/Zadaca2ButtonsForCount";
import { PrimjerUseeffect } from "./PrimjerUseeffect";
import { Zadaca3Tasks } from "../Zadace/Zadaca3Tasks";
import { Forma } from "./forma";
export const PozivKomponenti = () => {
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
      <br />
      <Forma />
    </div>
  );
};
