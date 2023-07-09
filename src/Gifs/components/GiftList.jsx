import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { useContext, useState } from "react";
import "./styles.css";
import { GifContext } from "../Context/GifContext";


export function GiftList({ categoria }) {
  const { deleteCategory } = useContext(GifContext);
  const { images, isLoading } = useFetchGifs(categoria);
  const [show, setShow] = useState(true)


  const handleDelete = () => {
    setShow(false);
    deleteCategory(categoria);
  };
  return (
    <div className="animate__animated animate__fadeInLeft">
      {show && (
        <>
          <h3>{categoria}</h3>
          <button onClick={handleDelete}>Eliminar</button>
          {isLoading ? <h2>Cargando Gifs...</h2> : null}
          <div className="card-grid">
            {images.map((image) => (
           
        
                <GiftItem key={image.id} {...image} />
              
            ))}
          </div>
        </>
      )}
    </div>
  );
}
