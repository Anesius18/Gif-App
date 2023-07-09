import { useContext} from "react";
import { AddCategory, GiftList } from "../components";
import { GifContext } from "../Context/GifContext";

export const SearchPage = () => {
    
  const {categorias} = useContext(GifContext)
  return (
    <>
      <h1 className="animate__animated animate__fadeInLeft m-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">GifApp</h1>
    <AddCategory />
    {categorias.map((categoria, index) => (
        <GiftList key={`${categoria} - ${index}`} categoria={categoria} />
      ))}
    </>
  )
}
