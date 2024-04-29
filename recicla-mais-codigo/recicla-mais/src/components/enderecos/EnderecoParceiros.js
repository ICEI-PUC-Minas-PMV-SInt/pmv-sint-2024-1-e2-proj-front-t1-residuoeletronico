import React from "react";
import "./EnderecoParceiros.css"

function EnderecoParceiros(props){
    return(
        <div className="enderecos">
            <p className="tituloEndereco">{props.titulo}</p>
            <p>{props.contato1}</p>
            <p>{props.contato2}</p>
        </div>
    );
}

export default EnderecoParceiros