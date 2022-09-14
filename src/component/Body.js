import React from "react";

class Body extends React.Component{
    render(){
    return(
        <section className="peliculas">
        <section className="tarjeta">
            <section className="titulo">
                <h2>{this.props.titulo}</h2>
            </section>
            <section className="info">
                <img src={this.props.img} alt="imagen_pelicula"/>
                <section className="synopsis">
                    <h3>Sinopsis</h3>
                    <p>{this.props.sinopsis}</p>
                    <h3>Trailer</h3>       
                    <iframe width="900" height="500" src={this.props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
                <section >
                    <h3>{this.props.duracion}</h3>
                    <h3>Elenco</h3>
            <ul>
                <li>{this.props.Actor1}  </li>
                <li>{this.props.Actor2} </li>
                <li>{this.props.Actor3} </li>
                <li>{this.props.Actor4} </li>
            </ul>
                    <h3>Clasificacion</h3>
                    <h4>{this.props.clasificacion}</h4>
                </section>
            </section>
            <footer><a className="footer">{this.props.genero}</a></footer>
        </section>
    </section>
    )
  }

}

export default Body;