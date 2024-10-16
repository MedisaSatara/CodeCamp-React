import React, { useState } from "react";

/*. Napravite komponentu koja koristi useState za upravljanje stanjem s više
gumba.
Kreirajte gumbove za promjenu count na različite vrijednosti (npr. +1, -1).
Prikazujte trenutnu vrijednost count u paragraphu.*/

export const Zadaca2ButtonsForCount = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increaseCount}>Povecaj</button>
      <button onClick={decreaseCount}>Smanji</button>
      <p>Vrijednost buttona nakon klika je {count}.</p>
    </div>
  );
};
