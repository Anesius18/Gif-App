import React, { useReducer, useState } from 'react'
import { GifContext, gifReducer } from './'
import { getGiftsRandom } from '../helpers/getGiftRandom';


export const GifProvider = ({children}) => {
    
  const [categorias, dispatch] = useReducer(gifReducer, [])


    const createCategories = (NameGift) => {
      dispatch({type: 'add', payload: NameGift})
      // if (categorias.find(categoria => categoria === NameGift)) return;
    //   if (categorias.includes(NameGift)) return;
    //   setCategorias([NameGift, ...categorias])
    }
    const deleteCategory = (category) => {
      dispatch({type: 'delete', payload: category})
    };
    
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
  
    const getImages = async () => {
      const newImages = await getGiftsRandom();
      setImages(newImages);
      setisLoading(false)
    };
  

  return (
    <GifContext.Provider value={{categorias, createCategories, deleteCategory, getImages, images, isLoading}}>
        {children}
    </GifContext.Provider>
  )
}
