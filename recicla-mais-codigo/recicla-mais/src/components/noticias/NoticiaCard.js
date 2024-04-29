import React from "react"
import "./NoticiaCard.css"

function NoticiaCard(props){
    return(
        <div>
            <img src={props.imagem} className="imgCard"/>
            <p className="pCard">
                {props.texto}
            </p>
        </div>
    );
}

export default NoticiaCard