import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias, ingredientes } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  //funcion para leer los contenidos
  const obtenerDatosReceta = (e) => {
    if (e.target.name === "nombre") {
      guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value,
        categoria: "",
      });
    } else if (e.target.name === "categoria") {
      guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value,
        nombre: "",
      });
    }
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
          <select
            name="nombre"
            id=""
            value={busqueda.nombre}
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecciona Ingrediente--</option>
            {ingredientes.map((ingrediente) => (
              <option
                key={ingrediente.strIngredient1}
                value={ingrediente.strIngredient1}
              >
                {ingrediente.strIngredient1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id=""
            className="form-control"
            value={busqueda.categoria}
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
