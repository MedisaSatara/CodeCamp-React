import React, { useEffect, useState } from "react";

export const CounterCheck: React.FC = () => {
  const [count, setCount] = useState(0);
  const [textChange, setTextChange] = useState("Prvobitna poruka");

  console.log({ count });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <button onClick={() => setCount(0)}>Resetiraj</button>
      <br />

      <button onClick={() => setTextChange("Druga poruka")}>Poruka:</button>
      {textChange}
    </div>
  );
};
