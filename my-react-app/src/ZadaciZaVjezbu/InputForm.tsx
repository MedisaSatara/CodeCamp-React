import React, { useState } from "react";
/*Izradite komponentu koja omogucava korisniku da unese 
svoje ime i prikaze ga.*/

export const InputForm: React.FC = () => {
  const [name, setName] = useState("");

  const [isTemaTamna, setIsTemaTamna] = useState<boolean>(true);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Unesite ime"
      />
      <h2>Pozdrav, {name}.</h2>
      <br />
      <div>
        <h1>{isTemaTamna ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={() => setIsTemaTamna(!isTemaTamna)}>Toggle</button>
      </div>
    </div>
  );
};
