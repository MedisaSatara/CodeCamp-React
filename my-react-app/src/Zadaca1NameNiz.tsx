import React from "react";

/*Napiši React komponentu koja sadrži niz imena i ispisuje svako
ime u paragrafu.*/

export const Zadaca1NameNiz: React.FC = () => {
  const nizName = ["Amina", "Medina", "Adna", "Lejla", "Ajla"];
  return (
    <div>
      {nizName.map((ime, index) => (
        <p key={index}>{ime}</p>
      ))}
    </div>
  );
};
