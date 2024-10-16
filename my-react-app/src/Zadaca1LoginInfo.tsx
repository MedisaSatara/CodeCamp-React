import React from "react";

/*. Napiši komponentu koja prima isLoggedIn (boolean) kao props i
prikazuje poruku ovisno o tome je li korisnik prijavljen ili ne.*/

type LogInfoProps = {
  isLoggedIn: boolean;
};
export const Zadaca1LoginInfo: React.FC<LogInfoProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>Korisnik je prijavljen.</div>
      ) : (
        <div>Korisnik nije prijavljen.</div>
      )}
    </div>
  );
};
