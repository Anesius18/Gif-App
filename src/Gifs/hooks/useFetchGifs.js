import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export  function useFetchGifs(categoria) {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifts(categoria);
      setImages(newImages);
      setisLoading(false)
    };
  
    useEffect(() => {
      getImages();
    }, []);
return {
    images,
    isLoading,
}
}
