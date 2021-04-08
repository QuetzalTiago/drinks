import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  return (
    <form className="col-md-12">
      <fieldset>
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
          ></input>
        </div>
        <div className="col-md-4">
          <select name="categoria" id="" className="form-control">
            <option value="">--Selecciona Categoría--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            name=""
            id=""
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
