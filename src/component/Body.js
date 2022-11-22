import React from "react";

function Body({titulo, sinopsis, duracion, clasificacion, genero, Actor1, Actor2, Actor3, Actor4, recepcion, src, img }) {
    return(
        <section className="peliculas">
        <section className="tarjeta">
            <section className="titulo">
                <h2>{titulo}</h2>
            </section>
            <section className="info">
                <img src={img} alt="imagen_pelicula"/>
                <section className="synopsis">
                    <h3>Sinopsis</h3>
                    <p>{sinopsis}</p>                  
                </section>
                <section >
                    <h3>{duracion}</h3>
                    <h3>Elenco</h3>
            <ul>
                <li>{Actor1}  </li>
                <li>{Actor2} </li>
                <li>{Actor3} </li>
                <li>{Actor4} </li>
            </ul>
                    <h3>Clasificacion</h3>
                    <h4>{clasificacion}</h4>
                </section>
            </section>
            <footer><a className="footer">{genero}</a></footer>
        </section>
    </section>
    );

}

export default Body;