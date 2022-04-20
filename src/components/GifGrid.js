import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import ReactLoading from "react-loading";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /*const [images, setImages] = useState([]);*/
  const { data: images, loading } = useFetchGifs(category);
  const Example = ({ type, color }) => (
    <ReactLoading type={"bars"} color={"#00000"} height={"5%"} width={"5%"} />
  );

  return (
    <>
      <h3>{category}</h3>

      {loading && <Example />}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
