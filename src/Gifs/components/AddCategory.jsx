import { useContext} from "react";
import { useForm } from "../../hooks/useForm";
import { GifContext } from "../Context/GifContext";

export function AddCategory() {
  const {Input, handleInput, ResetForm } = useForm({Input: ''})
  const {createCategories} = useContext(GifContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCategorias((categoria)=> [Input, ...categoria ])
    if (Input.trim().length <= 1) return;
    createCategories(Input);
   ResetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Busca un gift"
        name="Input"
        value={Input}
        className="animate__animated animate__backInUp"
      />
    </form>
  );
}
