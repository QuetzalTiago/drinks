import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  //funcion para leer los contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  //funcion para enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    buscarRecetas(busqueda);
    guardarConsultar(true);
  };

  return (
    <form className="col-md-12" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            onChange={obtenerDatosReceta}
            placeholder="Buscar por ingrediente"
          ></input>
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id=""
            className="form-control"
            onChange={obtenerDatosReceta}
          >
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
