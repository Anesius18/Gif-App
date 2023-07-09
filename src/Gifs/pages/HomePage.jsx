import React from "react";
import "../components/styles.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const gif =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnpqeGx5bzd5YzgxeTlkZzZ2ZnA2ZjYxaW52cTQyaHlscWVsYWxjOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/StKiS6x698JAl9d6cx/giphy.gif";
  const gif2 =
    "https://media3.giphy.com/media/hXO9K51TTuzEjHyzr8/giphy.gif?cid=ecf05e47wvo1djegdqh18q8y4y6fzisuo1bdokwt6ty1g1a1&ep=v1_gifs_related&rid=giphy.gif&ct=g";

  return (
    <div className=" rounded-3">
      <h1 className="m-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">HomePage</h1>
      <hr />
    
      <Link to='/trending' className="m-5 my-card hola">
        <img src={gif} className="img img-responsive" />
        <div className="profile-name">Trending Gifs</div>
        <div className="profile-position">Gifs populares del momento...</div>
      </Link>

      <Link to='/search' className=" my-card">
        <img src={gif2} className="img img-responsive" />
        <div className="profile-name">Buscar Gifs</div>
        <div className="profile-position">Busca cualquier gif que quieras!</div>
      </Link>


      
    </div>
  );
};
