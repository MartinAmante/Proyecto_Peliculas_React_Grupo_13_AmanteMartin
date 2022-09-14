import React from "react";

class Portada extends React.Component{
    render(){
    return(
        <div>
            <nav>
                <section className="sectionIndex">
                    <p className="tituloIndex">ZONACINEMA</p>
                    <a className="boton" href="./peliculas"> Ingresar</a>
                </section>
            </nav>
        </div>
        )
    }
}
export default Portada;