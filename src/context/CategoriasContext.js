import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  //crear state del context
  const [categorias, guardarCategorias] = useState([]);
  const [ingredientes, guardarIngredientes] = useState([]);

  //api call
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    const obtenerIngredientes = async () => {
      const url = `https://thecocktaildb.com/api/json/v1/1/list.php?i=list`;
      const ingredientes = await axios.get(url);
      guardarIngredientes(ingredientes.data.drinks);
    };
    obtenerIngredientes();
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias, ingredientes }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
