import React from "react";

function Header() {
    return(
    <div>
        <nav>
          <section className="header">
            <p className="tituloPag">ZONACINEMA</p>
            <a href="/" >Inicio</a>
            <a href="./peliculas" >Peliculas</a>
            <a href="./peliculas">Comprar entradas</a>
            <a href="./peliculas">Atencion al cliente</a>
          </section>
        </nav>
    </div>
   );

}
export default Header;