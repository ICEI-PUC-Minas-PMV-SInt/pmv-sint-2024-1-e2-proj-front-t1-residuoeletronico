import React, { useEffect } from "react";
import "./HomePage.css";
import "./TemplateSPA.css";
import NoticiaCard from "../components/noticias/NoticiaCard";
import IndicadorCard from "../components/indicadores/IndicadorCard";
import Coleta1 from "../imgs/coleta1.png";
import Coleta2 from "../imgs/coleta2.png";
import Coleta3 from "../imgs/coleta3.png";
import Dado1 from "../imgs/dado1.png";
import Dado2 from "../imgs/dado2.png";
import Dado3 from "../imgs/dado3.png";
import EnderecoParceiros from "../components/enderecos/EnderecoParceiros";

const noticias = [
    {
        titulo: "O Segredo da Reciclagem de Lixo Eletrônico",
        descricao: "A eficiência das coletas é fundamental para o sucesso da reciclagem de lixo eletrônico.",
        dataHora: "07/06/2024 | 16:45",
        hashtags: ["#Coletas", "#Reciclagem"],
        imagem: "https://example.com/imagem-noticia-coletas.jpg",
        conteudo: "A eficiência das coletas de lixo eletrônico desempenha um papel crucial na sustentabilidade ambiental. Coletas bem planejadas e executadas garantem que os materiais eletrônicos descartados sejam recolhidos e tratados adequadamente, evitando que acabem em aterros sanitários ou sejam enviados ilegalmente para países em desenvolvimento. Além disso, coletas eficientes facilitam o processo de reciclagem, tornando-o mais econômico e ambientalmente amigável."
    },
    {
        titulo: "Repensando a Gestão de Resíduos nas Cidades",
        descricao: "A reciclagem urbana é essencial para reduzir a quantidade de resíduos enviados para aterros sanitários.",
        dataHora: "07/06/2024 | 17:30",
        hashtags: ["#Reciclagem", "#Urbanismo"],
        imagem: "https://example.com/imagem-noticia-reciclagem-urbanismo.jpg",
        conteudo: "A reciclagem de resíduos urbanos é uma prática fundamental para reduzir a quantidade de lixo enviada para aterros sanitários, contribuindo assim para a preservação do meio ambiente e a promoção da sustentabilidade. Com o crescimento das cidades, o volume de resíduos produzidos aumentou significativamente, tornando a reciclagem urbana uma questão cada vez mais importante. A gestão eficiente dos resíduos urbanos envolve a coleta seletiva, a separação adequada dos materiais recicláveis, o incentivo à reciclagem e a conscientização da população sobre a importância desse processo."
    },
    {
        titulo: "Novas Tecnologias para um Futuro Sustentável",
        descricao: "As inovações em reciclagem estão transformando a maneira como lidamos com o lixo.",
        dataHora: "07/06/2024 | 18:15",
        hashtags: ["#Reciclagem", "#CiênciaETecnologia"],
        imagem: "https://example.com/imagem-noticia-inovacoes-reciclagem.jpg",
        conteudo: "As inovações em reciclagem estão impulsionando mudanças significativas na maneira como lidamos com o lixo e os resíduos. Novas tecnologias estão sendo desenvolvidas para tornar a reciclagem mais eficiente, econômica e ambientalmente amigável. Processos como a reciclagem química, a recuperação de energia a partir de resíduos e a fabricação de novos materiais a partir de materiais reciclados estão revolucionando a indústria da reciclagem e abrindo caminho para um futuro mais sustentável."
    },
    {
        titulo: "O Papel Fundamental da Educação Ambiental",
        descricao: "A educação ambiental é essencial para promover práticas sustentáveis de reciclagem.",
        dataHora: "07/06/2024 | 19:00",
        hashtags: ["#Reciclagem", "#MeioAmbiente"],
        imagem: "https://example.com/imagem-noticia-educacao-ambiental.jpg",
        conteudo: "A educação ambiental desempenha um papel fundamental na promoção de práticas sustentáveis de reciclagem e na conscientização sobre a importância da preservação do meio ambiente. Através da educação, é possível informar e sensibilizar as pessoas sobre os impactos negativos do descarte inadequado de resíduos e incentivar a adoção de hábitos mais sustentáveis, como a separação correta dos materiais recicláveis e o uso consciente dos recursos naturais."
    },
    {
        titulo: "Desafios e Oportunidades para o Futuro",
        descricao: "A reciclagem é uma das principais ferramentas para promover a sustentabilidade.",
        dataHora: "07/06/2024 | 20:30",
        hashtags: ["#Reciclagem", "#Sustentabilidade"],
        imagem: "https://example.com/imagem-noticia-desafios-reciclagem.jpg",
        conteudo: "A reciclagem é uma das principais ferramentas para promover a sustentabilidade e enfrentar os desafios ambientais globais. No entanto, ainda há muitos obstáculos a serem superados, como a falta de infraestrutura adequada, a baixa conscientização da população e a necessidade de desenvolver novas tecnologias. Apesar dos desafios, a reciclagem oferece oportunidades significativas para reduzir a pegada de carbono, conservar recursos naturais e criar empregos verdes."
    },
    {
        titulo: "Tecnologias Avançadas para uma Gestão Eficiente de Resíduos",
        descricao: "A reciclagem inteligente utiliza tecnologias avançadas para melhorar a gestão de resíduos.",
        dataHora: "07/06/2024 | 21:15",
        hashtags: ["#Reciclagem", "#CiênciaETecnologia"],
        imagem: "https://example.com/imagem-noticia-reciclagem-inteligente.jpg",
        conteudo: "A reciclagem inteligente é uma abordagem inovadora que utiliza tecnologias avançadas, como sensores, internet das coisas (IoT) e inteligência artificial (IA), para melhorar a gestão de resíduos e aumentar a eficiência da reciclagem. Essas tecnologias permitem monitorar e rastrear o fluxo de resíduos em tempo real, identificar materiais recicláveis com maior precisão e automatizar processos de separação e reciclagem. Com a reciclagem inteligente, é possível otimizar a coleta de resíduos, reduzir custos operacionais e minimizar o impacto ambiental, contribuindo assim para um futuro mais sustentável."
    },
    {
        titulo: "Reciclagem e Desenvolvimento Sustentável: Uma Abordagem Holística",
        descricao: "A reciclagem é parte integrante de uma abordagem holística para o desenvolvimento sustentável.",
        dataHora: "07/06/2024 | 22:00",
        hashtags: ["#Reciclagem", "#Sustentabilidade"],
        imagem: "https://example.com/imagem-noticia-desenvolvimento-sustentavel.jpg",
        conteudo: "A reciclagem desempenha um papel crucial no desenvolvimento sustentável, pois contribui para a redução da quantidade de resíduos enviados para aterros sanitários, a conservação de recursos naturais e a redução da emissão de gases de efeito estufa. Para que a reciclagem seja eficaz, é necessário adotar uma abordagem holística que considere não apenas a coleta e o processamento de resíduos, mas também a conscientização da população, o desenvolvimento de tecnologias sustentáveis e a criação de políticas públicas adequadas."
    },
    {
        titulo: "Reciclagem e Urbanismo: Repensando o Espaço Urbano",
        descricao: "A reciclagem é uma ferramenta essencial para promover o urbanismo sustentável.",
        dataHora: "07/06/2024 | 22:45",
        hashtags: ["#Reciclagem", "#Urbanismo"],
        imagem: "https://example.com/imagem-noticia-reciclagem-urbanismo-2.jpg",
        conteudo: "A reciclagem desempenha um papel fundamental no urbanismo sustentável, pois contribui para a redução da quantidade de resíduos urbanos enviados para aterros sanitários, a conservação de recursos naturais e a criação de ambientes mais saudáveis e sustentáveis para os moradores das cidades. Para promover o urbanismo sustentável, é necessário adotar políticas públicas e práticas que incentivem a reciclagem e a adoção de hábitos mais sustentáveis pela população."
    },
    {
        titulo: "Avanços Tecnológicos na Gestão de Resíduos",
        descricao: "A ciência está impulsionando avanços tecnológicos na gestão de resíduos e reciclagem.",
        dataHora: "07/06/2024 | 23:30",
        hashtags: ["#Reciclagem", "#CiênciaETecnologia"],
        imagem: "https://example.com/imagem-noticia-avancos-ciencia.jpg",
        conteudo: "A ciência desempenha um papel crucial na gestão de resíduos e reciclagem, impulsionando avanços tecnológicos que tornam o processo de reciclagem mais eficiente, econômico e ambientalmente amigável. Novas tecnologias, como a reciclagem química, a biotecnologia e a nanotecnologia, estão sendo desenvolvidas para enfrentar os desafios da reciclagem e promover um ciclo mais sustentável de materiais."
    },
    {
        titulo: "Reciclagem e Educação Ambiental: Promovendo a Conscientização",
        descricao: "A educação ambiental é essencial para promover a reciclagem e a sustentabilidade.",
        dataHora: "08/06/2024 | 00:15",
        hashtags: ["#Reciclagem", "#MeioAmbiente"],
        imagem: "https://example.com/imagem-noticia-educacao-ambiental-2.jpg",
        conteudo: "A educação ambiental desempenha um papel fundamental na promoção da reciclagem e da sustentabilidade, pois ajuda a conscientizar as pessoas sobre a importância de adotar práticas mais sustentáveis no dia a dia. Através da educação, é possível informar e sensibilizar as pessoas sobre os impactos negativos do descarte inadequado de resíduos e incentivar a adoção de hábitos mais sustentáveis, como a separação correta dos materiais recicláveis e o uso consciente dos recursos naturais."
    }
];

// Preenche o localstorage com noticias.
function preencherLocalStorage() {
    if (!localStorage.getItem("noticias")) {
        localStorage.setItem("noticias", JSON.stringify(noticias));
    }
}

function HomePage() {
    useEffect(() => {
        preencherLocalStorage();
        window.scrollTo(0, 0); // Move o scroll para o topo do viewport quando a tela é montada
    }, []);

    const textoNoticias = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas placerat tristique. ";

    return (
        <main>
            <h2 className="titulo">Últimas Notícias</h2>
            <div className="containerCard">
                <div className="borda containerNoticiaPrincipal">
                    <NoticiaCard imagem={Coleta2} texto={textoNoticias + textoNoticias + textoNoticias} />
                </div>
                <div className="borda containerNoticiaSecundaria">
                    <div className="borda noticiaSecundaria">
                        <NoticiaCard imagem={Coleta1} texto={textoNoticias} />
                    </div>
                    <div className="borda noticiaSecundaria">
                        <NoticiaCard imagem={Coleta3} texto={textoNoticias} />
                    </div>
                </div>
            </div>

            <h2 className="titulo">Indicadores</h2>
            <div className="containerCard">
                <IndicadorCard imagem={Dado1} numero={"15386"} texto={"Itens Reciclados"} />
                <IndicadorCard imagem={Dado2} numero={"2508"} texto={"Agendamentos Efetuados"} />
                <IndicadorCard imagem={Dado3} numero={"1.542,742"} texto={"Pontos Trocados por Benefícios"} />
            </div>

            <h2 className="titulo">Veja onde fazer o descarte de pilhas e baterias em BH</h2>
            <div className="containerEndereco">
                <EnderecoParceiros titulo="Prodabel" contato1="Telefone: (31) 3277-4771" contato2="   Endereço: Rua José Clemente Pereira, 440, bairro Ipiranga – Belo Horizonte" />
                <EnderecoParceiros titulo="BH Recicla" contato1="https://bhrecicla.com.br/coleta-transporte-e-destinacao-de-residuos" contato2="Telefone: (31) 3063-0688" />
                <EnderecoParceiros titulo="MG Recicla" contato1="https://mgrecicla.com/" contato2="Telefone: (31) 97104-7254" />
                <EnderecoParceiros titulo="Emile Reciclagem" contato1="https://emile.net.br/servicos/" contato2="Telefone: (31) 3054-6828, (31) 3044-5280 e (31) 99544-9937" />
            </div>
        </main>
    );
}

export default HomePage;
