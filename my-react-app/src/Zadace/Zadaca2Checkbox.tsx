import React, { useState } from "react";

/*Napravite komponentu koja koris3 useState za kontrolu checkbox-a.
Koris3te useState za pohranu boolean vrijednos3 (true/false).
Dodajte checkbox i povežite njegov checked atribut s useState.
Prikazujte poruku koja se mijenja ovisno o stanju checkbox-a.
Primjer za checkbox:
<input
type="checkbox"
checked={value}
onChange={}
/>*/

export const Zadaca2Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />{" "}
        Danas je dan za zadacu.
      </label>
      <p>{isChecked ? "Checkbox je oznacen." : "Checkbox nije oznacen"}</p>
    </div>
  );
};
