import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  //   const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  // usamos el hook de useState
  const [categories, setCategories] = useState(["One Punch"]);
  //agregamos boton para añadir elemento
  // const handleAdd = () => {
  //   setCategories([...categories, "Star Wars"]); //a todos los elementos del categories, les añadimos otro
  // };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
