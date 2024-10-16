import React from "react";

/*Kreiraj komponentu koja prima temperaturu kao props i prikazuje
poruku "Toplo" ili "Hladno" ovisno o vrijednosti temperature.*/

type TempCheckerProps = {
  temp: number;
};
export const Zadaca1TempChecker: React.FC<TempCheckerProps> = ({ temp }) => {
  return <div>{temp > 20 ? <div>Toplo</div> : <div>Hladno</div>}</div>;
};
