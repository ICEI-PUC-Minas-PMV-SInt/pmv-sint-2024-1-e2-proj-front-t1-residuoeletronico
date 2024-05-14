import React from "react";
import "./NoticiaPage.css"

function NoticiaPage(){
    return(
        <main className="mainNoticias">
            <div className="containerNoticias">
                <h2 className="tituloNoticia">Título da noticia</h2>
                <span>Data hora</span>
                <p>Texto</p>
                <img src="" alt="Imagem da notícia"></img>
                <p>Texto da notícia</p>
            </div>
            <div className="containerPesquisa">
                <h2 className="tituloNoticia">Pesquisar</h2>
                <div className="containerPesquisaCategoria borda">
                    <form className="formulario">
                        <input type="text" placeholder="Palavra chave" /> <br/>
                        <button type="submit">OK</button>
                    </form>
                    <div class="categorias">
                        <ul>
                            <li><a href="">Coletas</a></li>
                            <li><a href="">Meio Ambiente</a></li>
                            <li><a href="">Reciclagem</a></li>
                            <li><a href="">Ciência e Tecnologia</a></li>
                            <li><a href="">Urbanismo</a></li>
                        </ul>  
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NoticiaPage