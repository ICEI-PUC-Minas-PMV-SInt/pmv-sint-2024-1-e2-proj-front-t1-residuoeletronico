import React from "react";
import "./HomePage.css"
import "./TemplateSPA.css"
import NoticiaCard from "../components/noticias/NoticiaCard";
import IndicadorCard from "../components/indicadores/IndicadorCard";
import Coleta1 from "../imgs/coleta1.png";
import Coleta2 from "../imgs/coleta2.png";
import Coleta3 from "../imgs/coleta3.png";
import Dado1 from "../imgs/dado1.png";
import Dado2 from "../imgs/dado2.png";
import Dado3 from "../imgs/dado3.png";
import EnderecoParceiros from "../components/enderecos/EnderecoParceiros";

function HomePage(){
    const textoNoticias = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas placerat tristique. "
    return(
        <main>
            <h2 className="titulo">Últimas Notícias</h2>
            <div className="containerCard">
                <div className="borda containerNoticiaPrincipal">
                    <NoticiaCard imagem={Coleta2} texto={textoNoticias+textoNoticias+textoNoticias} />
                </div>
                <div className="borda containerNoticiaSecundaria">
                    <div className="borda noticiaSecundaria">
                        <NoticiaCard imagem={Coleta1} texto={textoNoticias}/>
                    </div>
                    <div className="borda noticiaSecundaria">
                        <NoticiaCard imagem={Coleta3} texto={textoNoticias}/>
                    </div>
                </div>
            </div>

            <h2 className="titulo">Indicadores</h2>
            <div className="borda containerCard">
                <IndicadorCard imagem={Dado1} numero={"15386"} texto={"Itens Reciclados"} />
                <IndicadorCard imagem={Dado2} numero={"2508"} texto={"Agendamentos Efetuados"} />
                <IndicadorCard imagem={Dado3} numero={"1.542,742"} texto={"Pontos Trocados por Benefícios"} />
            </div>

            <h2 className="titulo">Veja onde fazer o descarte de pilhas e baterias em BH</h2>
            <div className="borda containerEndereco">
                <EnderecoParceiros titulo="Prodabel" contato1="Telefone: (31) 3277-4771" contato2="   Endereço: Rua José Clemente Pereira, 440, bairro Ipiranga – Belo Horizonte"/>
                <EnderecoParceiros titulo="BH Recicla" contato1="https://bhrecicla.com.br/coleta-transporte-e-destinacao-de-residuos" contato2="Telefone: (31) 3063-0688"/>
                <EnderecoParceiros titulo="MG Recicla" contato1="https://mgrecicla.com/" contato2="Telefone: (31) 97104-7254"/>
                <EnderecoParceiros titulo="Emile Reciclagem" contato1="https://emile.net.br/servicos/" contato2="Telefone: (31) 3054-6828, (31) 3044-5280 e (31) 99544-9937"/>
            </div>
        </main>
    );
}

export default HomePage