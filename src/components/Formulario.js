import React from "react";
const Formulario = () => {
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
