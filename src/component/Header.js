import React from "react";

class Header extends React.Component{
render(){
    return(
    <div>
        <nav>
          <section className="header">
            <p class="tituloPag">ZONACINEMA</p>
            <a href="/" >Inicio</a>
            <a href="./peliculas" >Peliculas</a>
            <a href="./peliculas">Comprar entradas</a>
            <a href="./peliculas">Atencion al cliente</a>
          </section>
        </nav>
    </div>
   )

 }

}
export default Header;