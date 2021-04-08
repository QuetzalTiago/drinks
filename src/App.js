import React, { Fragment } from "react";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
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
          <ListaRecetas />
        </Fragment>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
