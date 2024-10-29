import React, { useEffect, useState } from "react";

import { PozivKomponenti } from "./ZadaciZaVjezbu/PozivKomponenti";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";

/*const App: React.FC = () => {
  const ime: string = "svijete";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pozdrav, {ime}</h1>
      </header>
    </div>
  );
};

export default App;*/

export const App: React.FC = () => {
  return (
    <div>
      {/*<PozivKomponenti />*/}
      <Login />
      <Registration />
    </div>
  );
};
