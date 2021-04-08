import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Fragment>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
          </div>
        </Fragment>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
