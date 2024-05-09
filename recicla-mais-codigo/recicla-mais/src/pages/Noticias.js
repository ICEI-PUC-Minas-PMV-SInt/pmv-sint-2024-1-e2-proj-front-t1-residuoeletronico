import React from "react";
import "./Noticias.css"
import NoticiaResumida from "../components/noticias/NoticiaResumida";
import Coleta1 from "../imgs/coleta1.png";
import Coleta2 from "../imgs/coleta2.png";
import Coleta3 from "../imgs/coleta3.png";
import Recycle from "../imgs/recycle.png"


function Noticias(){
    const titulo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales mollis mi vel accumsan."
    const dataHora = "01/01/2024 | 12:00"
    const hastag1 = "#Coletas"
    const hastag2 = "#Meio-Ambiente"
    const hastag3 = "#Reciclagem"
    return(
        <main className="mainNoticias">
            <div className="containerNoticias">
                <h2 className="tituloNoticia">Notícias</h2>
                <NoticiaResumida imagem={Coleta1} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag1}/>
                <NoticiaResumida imagem={Coleta2} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag2}/>
                <NoticiaResumida imagem={Coleta3} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag3}/>
                <NoticiaResumida imagem={Coleta1} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag1}/>
                <NoticiaResumida imagem={Coleta2} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag3}/>
                <NoticiaResumida imagem={Coleta3} titulo={titulo} descricao={descricao} dataHora={dataHora} hashtag={hastag2}/>
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

export default Noticias