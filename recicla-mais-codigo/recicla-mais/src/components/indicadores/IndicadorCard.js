import React from "react";
import "./indicadorCard.css"

function IndicadorCard(props){
    return(
        <div className="container">
            <img src={props.imagem} className="imgIndicador"/>
            <p className="numIndicador">{props.numero}</p>
            <p className="txtIndicador">{props.texto}</p>
        </div>
    );
}

export default IndicadorCard

