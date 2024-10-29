import React, { useEffect, useRef, useState } from "react";

export const PrimjerUseeffect: React.FC = () => {
  const [prvi, postaviPrvi] = useState(0);
  const [drugi, postaviDrugi] = useState(0);
  const [count, setCount] = useState(0);
  const [naslov, setNaslov] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0);

  const [stateBrojac, postaviBrojac] = useState(0);
  const refBrojac = useRef(0);

  function uvecajRef() {
    refBrojac.current += 1;
    console.log("uvecali smo brojac!");
  }

  function uvecajState() {
    postaviBrojac((b) => b + 1);
  }

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Kliknuo je ${countRef.current} puta`);
  };

  const prva = useRef<HTMLImageElement | null>(null);
  const zadnja = useRef<HTMLImageElement | null>(null);

  function naZadnju() {
    if (zadnja.current) {
      zadnja.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function naPrvu() {
    if (prva.current) {
      prva.current.scrollIntoView({ behavior: "smooth" });
    }
  }

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

      <br />
      <br />
      <div className="task1">
        <p>Ref brojac: {refBrojac.current}</p>
        <button onClick={uvecajRef}>+</button>
        <p>State brojac:{stateBrojac}</p>
        <button onClick={uvecajState}>+</button>
      </div>

      <br />
      <br />
      <div className="task2">
        <div className="kontrola">
          <button onClick={naZadnju}>Zadnja</button>
          <button onClick={naPrvu}>Prva</button>
        </div>
        <div className="okvir">
          <img
            src="https://http.cat/204"
            alt="No Content"
            ref={prva}
            width={200}
          />
          <br />
          <img src="https://http.cat/401" alt="Unauthorized" width={200} />
          <br />
          <img src="https://http.cat/404" alt="Not Found" width={200} />
          <br />
          <img
            src="https://http.cat/409"
            alt="Conflict"
            ref={zadnja}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};
