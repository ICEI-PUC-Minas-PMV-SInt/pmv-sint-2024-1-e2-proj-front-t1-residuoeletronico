import React from 'react';
import './NoticiaResumida.css';

function NoticiaResumida(props) {
    return (
        <div className='containerNoticia borda'>
            <div className='containerImagem borda'>
                <img src={props.imagem} className='imagemNoticia' alt={props.titulo} />
            </div>
            <div className='containerInformacoes borda'>
                <h2>{props.titulo}</h2>
                <p>{props.descricao}</p>
                <span>{props.dataHora}</span>
                <br/>
                <span>{props.hashtag}</span>
            </div>
        </div>
    );
}

export default NoticiaResumida;
