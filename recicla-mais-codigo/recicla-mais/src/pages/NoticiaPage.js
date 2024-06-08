import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NoticiaPage.css";
import NoticiaDetalhada from "../components/noticias/NoticiaDetalhada";

function NoticiaPage() {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        const storedNoticias = JSON.parse(localStorage.getItem("noticias")) || [];
        setNoticia(storedNoticias[id]);
    }, [id]);

    if (!noticia) {
        return <div>Loading...</div>;
    }

    return (
        <main className="mainNoticia">
            <div className="containerNoticias borda">
                <NoticiaDetalhada
                    titulo={noticia.titulo}
                    imagem={noticia.imagem}
                    descricao={noticia.descricao}
                    dataHora={noticia.dataHora}
                    conteudo={noticia.conteudo}
                    hashtags={noticia.hashtags}
                />
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

export default NoticiaPage;
