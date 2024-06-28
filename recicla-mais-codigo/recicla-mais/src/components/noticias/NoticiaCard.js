import React from "react"
import "./NoticiaCard.css"

function NoticiaCard(props){
    return(
        <div className="divNoticia">
            <img src={props.imagem} className="imgCard"/>
            <h4 className="tCard">
                {props.titulo}
            </h4>
            <p className="pCard">
                {props.texto}
            </p>
        </div>
    );
}

export default NoticiaCard