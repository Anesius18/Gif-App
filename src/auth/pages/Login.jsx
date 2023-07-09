import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Background } from "../components/Background";
import { Page } from "../components/page";

export const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { nombre, handleInput, ResetForm } = useForm({ nombre: "" });
  const onLogin = () => {
    if (nombre === "") return alert("Debes poner un nombre");
    login(nombre);
    navigate("/", { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
  
    <form
      onSubmit={handleSubmit}
      className=" container mt-5 card-img animate__animated animate__zoomIn bg-slate-200 rounded-3 text-center"
    >
      <Background />
      <h1 className="m-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">GifApp</h1>
         <p className=" rounded-md bg-indigo-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">App para buscar Gifs y ver las top 10</p>
      <input
        className="m-4 col-6"
        placeholder="Nombre"
        name="nombre"
        type="text"
        onChange={handleInput}
        value={nombre}
      />
      <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={onLogin}>
        Login
      </button>
   
    <Page/>

    </form>
  );
};
