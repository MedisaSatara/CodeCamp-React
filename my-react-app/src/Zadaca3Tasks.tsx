import React, { useEffect, useRef, useState } from "react";

/*Prikaži poruku u konzoli prilikom prvog renderiranja
komponente*/

/*Dodajte stanje(useState) i koristite useEffect za praćenje
promjena tog stanja.*/

/*Postavi naslov dokumenta na temelju stanja.*/

/*. Kreirajte tajmer koji se ažurira, ali ne izaziva ponovno
renderiranje.*/

/*Kreirati komponentu koja će sadržati input polje, a kada
korisnik klikne na dugme, fokus će se automatski postaviti
na to input polje.*/
export const Zadaca3Tasks: React.FC = () => {
  const [stanje, setStanje] = useState(0);

  const timerRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    console.log("Poruka je prikazana prilikom prvog renderiranja komponente");
    console.log(`Pratimo stanje ${stanje}`);

    const interval = setInterval(() => (timerRef.current += 1));
    console.log(`Timer: ${timerRef.current}`);
    return () => clearInterval(interval);

    inputRef.current?.focus();
  }, [stanje, []]);
  return (
    <div>
      Komponenta trece zadace
      <p>Trenutno stanje {stanje}</p>
      <button onClick={() => setStanje(stanje + 1)}>Stanje</button>
      <br />
      <span>Slijedi naslov dokumenta na temelju stanja</span>
      <h1>{stanje}</h1>
      <br />
      <div>Timer: {timerRef.current}</div>
      <br />
      <input type="text" ref={inputRef} id="input" />
      <p>{inputRef.current?.value}</p>
      {/*<button onClick={() => inputRef.current?.focus()}>Postavi fokus</button>*/}
      <button onClick={() => handleFocus()}>Postavi fokus</button>
    </div>
  );
};
