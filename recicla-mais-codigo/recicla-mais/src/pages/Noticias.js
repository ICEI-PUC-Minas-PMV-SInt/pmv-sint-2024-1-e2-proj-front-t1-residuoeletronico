import React, { useEffect } from "react";
import "./Noticias.css";
import NoticiaResumida from "../components/noticias/NoticiaResumida";
import { Link } from "react-router-dom";

function Noticias() {

    useEffect(() => {
        window.scrollTo(0, 0); // Move o scroll para o topo do viewport quando a tela é montada
    }, []);
    const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

    return (
        <main className="mainNoticias">
            <div className="containerNoticias">
                <h2 className="tituloNoticia">Notícias</h2>
                {/* Cria uma lista de noticias buscadas do localstorage. */}
                {noticias.map((noticia, index) => (
                    <Link key={index} className="linkNoticia" to={`/noticia/${index}`}>
                        <NoticiaResumida
                            imagem={noticia.imagem}
                            titulo={noticia.titulo}
                            descricao={noticia.descricao}
                            dataHora={noticia.dataHora}
                            hashtag={noticia.hashtags.join(" ")}
                        />
                    </Link>
                ))}
            </div>
            <div className="containerPesquisa">
                <h2 className="tituloNoticia">Pesquisar</h2>
                <div className="containerPesquisaCategoria borda">
                    <form className="formulario">
                        <input type="text" placeholder="Palavra chave" /> <br />
                        <button type="submit">OK</button>
                    </form>
                    <div className="categorias">
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

export default Noticias;
