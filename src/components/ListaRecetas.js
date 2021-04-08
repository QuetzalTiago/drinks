import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);

  if (!recetas) {
    return (
      <h2 className="text-center mt-5">
        Seleccione una categoría o ingrediente
      </h2>
    );
  }

  return (
    <div className="container">
      <div className="row mt-5">
        {recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default ListaRecetas;
