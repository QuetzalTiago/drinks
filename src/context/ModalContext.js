import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarInformacion] = useState({});

  //api call
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const response = await axios.get(url);
      guardarInformacion(response.data.drinks[0]);
    };
    obtenerReceta();
  }, [idreceta, guardarIdReceta]);

  return (
    <ModalContext.Provider
      value={{ guardarIdReceta, guardarInformacion, informacion }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
