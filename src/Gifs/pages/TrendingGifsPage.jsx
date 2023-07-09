import { useContext, useEffect, useState } from "react";
import { GifContext } from "../Context/GifContext";
import { getGiftsRandom } from "../helpers/getGiftRandom";
import { GiftItem } from "../components";

export const TrendingGifsPage = () => {
 const {isLoading, getImages, images} = useContext(GifContext)

  useEffect(() => {
    getImages();
  }, []);

return (
  <>
  <h1 className="m-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Trending Gifs</h1>
  <hr/>
  {isLoading ? <h2>Cargando Gifs...</h2> : null}
 <div className="card-grid">
            {images.map((image) => (
              <GiftItem key={image.id} {...image} />
            ))}
          </div>
  </>
)
}
