import React from "react";
import "./NoticiaDetalhada.css"

function NoticiaDetalhada(props){
    return (
        <article>
            <h2 className="tituloNoticia">{props.titulo}</h2>
            <span className="dataNoticia">{props.dataHora}</span>
            <span className="hashNoticia">{props.hashtags}</span>
            <p className="descricaoNoticia">{props.descricao}</p>
            <img src={props.imagem} alt="Imagem da notícia" className="imgNoticia"/>
            <p className="conteudoNoticia">{props.conteudo}</p>
        </article>
    );
}

export default NoticiaDetalhada;

