import React from "react";

/*Napiši React komponentu koja prima ime i prezime kao props i
ispisuje ih u parafraph.*/

type NameShowProps = {
  name: string;
};
export const Zadaca1NameShow: React.FC<NameShowProps> = ({ name }) => {
  return (
    <div>
      <p>Name and last name of person {name}</p>
    </div>
  );
};
