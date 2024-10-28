import React, { useEffect, useRef, useState } from "react";

export const PrimjerUseeffect: React.FC = () => {
  const [prvi, postaviPrvi] = useState(0);
  const [drugi, postaviDrugi] = useState(0);
  const [count, setCount] = useState(0);
  const [naslov, setNaslov] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Kliknuo je ${countRef.current} puta`);
  };

  useEffect(() => {
    console.log(`Trenutni broj: ${count}`);
    console.log("Brojac se uvecava");

    console.log(`Naslov: ${naslov}`);
    if (naslov > 2)
      console.log("Kliknuli ste vise od dva puta na button naslov");
    else {
      console.log("Kliknuli ste manje od dva puta na button naslov");
    }

    if (naslov > 5) {
      console.log("Kliknuli ste vise od pet puta na button naslov");
      setDisabled(true);
    }
    inputRef.current?.focus();

    return () => {
      console.log("Ciscenje efekta");
    };
  }, [prvi, count, naslov, disabled]);

  /*Koristi useEffect da azurira naslov, svaki put kada korisnik poveca broj klikova,
   te ispise u konzoli koliki je broj klikanja*/

  /*Kreirati komponetu koja pravi broj klikovai ispisuje poruku kada korisnik klikne 
   vise od dva puta. Koristi if/else petlju*/

  /*dodati disabled button, ako je broj klikova veci od 5*/

  /*stvoriti komponentu koja ima tekstualni unos, a kada se komponenta ucita, unos bi trabo automatski
  dobiti fokus*/

  /*stvoriti komponentu koja prikazuje koliko je puta korisnik kliknnuo na gumb, koristeci
  useRef za pohranu broja.*/

  /*use state se mijenja svaki put kada se klikne
  use ref se mijenja u konzoli ali ne i na ekranu
  
  ali kada se neka druga komponenta promijeni, onda se promijeni ref jer je u sebi pamtio sta je radio.
  dok use state kada se promijeni promjeni se i u konzoli i na ekranu.
  */
  return (
    <div className="main">
      <h1>USE EFFECT PRIMJERI</h1>
      <p>Prvi:{prvi}</p>
      <button onClick={() => postaviPrvi(prvi + 1)}>+</button>
      <p>Drugi:{drugi}</p>
      <button onClick={() => postaviDrugi(drugi + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Povecaj</button>
      <h1>Naslov {naslov}</h1>
      <button onClick={() => setNaslov(naslov + 1)}>Naslov povecaj </button>
      <br />
      <h1>Vise od 2 puta</h1>
      <h1>Naslov {naslov}</h1>
      <button disabled={disabled} onClick={() => setNaslov(naslov + 1)}>
        Naslov povecaj
      </button>

      <h1>use Ref primjer</h1>
      <div>
        <label htmlFor="input">Unesite tekst:</label>
        <input ref={inputRef} id="input" type="text" />
        <p>{inputRef.current?.value}</p>
      </div>

      <button onClick={handleClick}>Klikni</button>
      <p>{countRef.current}</p>
    </div>
  );
};
