import React, { useState } from "react";
import PropTypes from "prop-types";
// import { setCategories } from "./../GifExpertApp";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Entrar serie");
  const handleInputChange = (e) => {
    setInputValue(e.target.value); //e.target.value, nos da el valor del evento
  };
  const handleSubmit = (e) => {
    //quiero eliminar el evento de envio
    e.preventDefault();
    //podemos hacer una validación para que siempre haya algo de texto que nunca se envie vacio
    //Y otra, pra limpiar el valor del input cuando enviammos
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
