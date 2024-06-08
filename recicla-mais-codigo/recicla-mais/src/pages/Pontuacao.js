import './TemplateSPA.css';
import './Pontuacao.css';
import TabelaAzul from "../components/tabelas/TabelaAzul";
import BoxExtrato from '../components/textBox/BoxExtrato';
import CelulaExtrato from '../components/tabelas/CelulaExtrato';
import { useNavigate } from "react-router-dom";
import IPTU from '../imgs/iptu.png';
import ifood from '../imgs/ifood.png';
import dotz from '../imgs/dotz.png';
import supbh from '../imgs/supbh.png';
import { useEffect, useState } from 'react';
import CardPontuacaoPerfil from "../components/perfil/CardPontuacaoPerfil";
import BotaoCards from '../components/buttons/BotaoCards';
import DivPontuacaoTotal from "../components/agendamento/DivPontuaçãoTotal";



function Pontuacao() {
    const navigate = useNavigate();
    const headersExtrato = ['Data', 'Quantidade', 'Produto', 'Pontos'];
    const [agendamentos, setAgendamentos] = useState([]);
    const [pontuacaoTotalUsuario, setPontuacaoTotalUsuario] = useState(0);

    useEffect(() => {
        const storedAgendamentos = localStorage.getItem('infoAgendamento');
        if (storedAgendamentos) {
            setAgendamentos(JSON.parse(storedAgendamentos));
        }

        // Calcular a pontuação total do usuário a partir dos agendamentos
        let total = 0;
        agendamentos.forEach((agendamento) => {
            total += agendamento.pontuacaoTotal;
        });
        setPontuacaoTotalUsuario(total);
        window.scrollTo(0, 0); // Move o scroll para o topo do viewport quando a tela é montada
    }, [agendamentos]);

    const handleConfirmButtonClick = (valor) => {
        // Verifica se a pontuação total do usuário é suficiente para a troca
        if (pontuacaoTotalUsuario < 400) { // Defina o valor mínimo necessário para troca
            alert('Você não tem pontuação suficiente!');
            return;
        }

        // Subtrai os pontos do total dos agendamentos
        const novoAgendamentos = agendamentos.map((agendamento) => ({
            ...agendamento,
            pontuacaoTotal: agendamento.pontuacaoTotal - 400, // Defina a quantidade de pontos a serem subtraídos
        }));

        // Atualiza o estado dos agendamentos e o localStorage
        setAgendamentos(novoAgendamentos);
        localStorage.setItem('infoAgendamento', JSON.stringify(novoAgendamentos));

        // Navega para a tela de confirmação de troca de pontos
        navigate('/ConfirmaTrocaPontos', { state: { valor } });
    };

    const calculaPontos = (item, quantidade) => {
        let pontuacao = 0;
        switch (item) {
            case 'Notebook':
                pontuacao = 500;
                break;
            case 'Computador':
                pontuacao = 600;
                break;
            case 'Celular':
                pontuacao = 800;
                break;
            case 'Tablet':
                pontuacao = 900;
                break;
            default:
                break;
        }
        return pontuacao * quantidade;
    };

    return (
        <main className='mainPontuacao'>
            <div className='boxPontuacao'>
                <BoxExtrato text='Extrato de Pontos' />
                <div className='divTabelaExtrato'>
                    <TabelaAzul
                        headersTabela={headersExtrato}
                        corpoTabela={<CelulaExtrato agendamentos={agendamentos} calculaPontos={calculaPontos} />}
                    />
                </div>
                <CardPontuacaoPerfil />
                <br />
                <br />
                <BoxExtrato text='Trocar os Pontos' />
                <div className='cardsParceiros'>
                    <BotaoCards
                        className='iptu'
                        texto='R$100,00 a cada 400 pontos'
                        eventoOnClick={() => handleConfirmButtonClick('R$100,00 de desconto no IPTU')}
                        img={IPTU}
                    />
                    <BotaoCards
                        className='ifood'
                        texto='R$80,00 a cada 400 pontos'
                        eventoOnClick={() => handleConfirmButtonClick('R$80,00 de crédito com o iFood')}
                        img={ifood}
                    />
                    <BotaoCards
                        className='dotz'
                        texto='R$60,00 a cada 400 pontos'
                        eventoOnClick={() => handleConfirmButtonClick('R$60,00 de crédito com o DOTZ')}
                        img={dotz}
                    />
                    <BotaoCards
                        className='supbh'
                        texto='R$100,00 a cada 400 pontos'
                        eventoOnClick={() => handleConfirmButtonClick('R$100,00 de crédito com o Supermercado BH')}
                        img={supbh}
                    />
                </div>
            </div>
        </main>
    );
}

export default Pontuacao;

