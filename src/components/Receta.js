import React from "react";
const Receta = ({ receta }) => {
  const { idDrink, strDrink, strDrinkThumb } = receta;
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{strDrink}</h2>
        <img
          src={strDrinkThumb}
          className="card-img-top"
          alt={`Imagen de ${strDrink}`}
        />
        <div className="card-body">
          <button type="button" className="btn btn-block btn-primary">
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
