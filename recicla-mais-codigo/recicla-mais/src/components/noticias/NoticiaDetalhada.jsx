import React from "react";

function NoticiaDetalhada(props){
    return (
        <article>
            <h2 className="tituloNoticia">{props.titulo}</h2>
            <span>{props.dataHora}</span>
            <span>{props.hashtags}</span>
            <p>{props.descricao}</p>
            <img src='${props.imagem}' alt="Imagem da notícia"></img>
            <p>{props.conteudo}</p>
        </article>
    );
}

export default NoticiaDetalhada;

