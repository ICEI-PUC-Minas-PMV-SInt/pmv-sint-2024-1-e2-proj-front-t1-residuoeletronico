import React from "react";

function NoticiaDetalhada(props){
    return(
        <article>
            <h2 className="tituloNoticia">{props.titulo}</h2>
                 <span>Data hora</span>
                 <p>Texto</p>
                 <img src="" alt="Imagem da notícia"></img>
                <p>Texto da notícia</p>
        </article>
    );
}

export default NoticiaDetalhada

