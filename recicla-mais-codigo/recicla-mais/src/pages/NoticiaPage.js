import React from "react";
import "./NoticiaPage.css"
import NoticiaDetalhada from "../components/noticias/NoticiaDetalhada";

function NoticiaPage(){
    const titulo = "Lorem"
    return(
        <main className="mainNoticia">
            <div className="containerNoticias borda">
                <NoticiaDetalhada titulo={titulo}/>
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