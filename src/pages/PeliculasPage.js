import React from "react";
import Header from '../component/Header.js';
import Body from '../component/Body.js';
import peliculas from '../json/peliculas.json';

function PeliculasPage() {
    return(
        <>
        <Header/>
        {peliculas.map((peli,i) =>
             <Body
              key = {i}
              img={peli.img}
              titulo={peli.titulo}
              sinopsis={peli.sinopsis}
              duracion={peli.duracion}
              clasificacion={peli.clasificacion}
              genero={peli.genero}
              Actor1={peli.Actor1}
              Actor2={peli.Actor2}
              Actor3={peli.Actor3}
              Actor4={peli.Actor4}
              recepcion={peli.recepcion}
              src={peli.src}/>
              )
            }
        </>
        );
}
export default PeliculasPage;