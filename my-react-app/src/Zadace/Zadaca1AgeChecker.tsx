import React from "react";

/*Napiši komponentu koja prima age (godine) kao props i ispisuje
različitu poruku ovisno o tome je li osoba mlađa ili starija od 18
godina.*/
type AgeCheckerProps = {
  age: number;
};

export const Zadaca1AgeChecker: React.FC<AgeCheckerProps> = ({ age }) => {
  return (
    <div>
      {age < 18 ? (
        <div>Osoba je mladja od 18 godina.</div>
      ) : age === 18 ? (
        <div>Osoba ima 18 godina.</div>
      ) : (
        <div>Osoba je starija od 18 godina.</div>
      )}
    </div>
  );
};
