import './TemplateSPA.css';
import './Pontuacao.css';
import TabelaAzul from "../components/tabelas/TabelaAzul";
import BoxExtrato from '../components/textBox/BoxExtrato';
import CelulaExtrato from '../components/tabelas/CelulaExtrato';
import BotaoAzul from '../components/buttons/BotaoAzul';
import BotaoCards from '../components/buttons/BotaoCards';
import { useNavigate } from "react-router-dom";
import IPTU from '../imgs/iptu.png';
import ifood from '../imgs/ifood.png';
import dotz from '../imgs/dotz.png';
import supbh from '../imgs/supbh.png';
import { useEffect } from 'react';
import { useState } from 'react';


function Pontuacao() {

    const navigate = useNavigate();

    const headersExtrato = ["Data", "Quantidade", "Produto", "Pontos"];

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const storedAgendamentos = localStorage.getItem('infoAgendamento');
        if (storedAgendamentos) {
            setAgendamentos(JSON.parse(storedAgendamentos));
        }
    }, []);

    const handleConfirmButtonClick = () => {
        navigate("/ConfirmaTrocaPontos")
    };

    return (
        
            <main className='mainPontuacao'>
                <div className='boxPontuacao'>
                    <BoxExtrato text='Extrato de Pontos' />
                    <div className='divTabelaExtrato'>
                        <TabelaAzul 
                            headersTabela={headersExtrato}
                            corpoTabela={<CelulaExtrato agendamentos={agendamentos} selectedOptions={agendamentos.selectedItemOptions} />}
                        />
                     </div>
                    <BotaoAzul texto='Você tem 5.000 Pontos' className='botaoAzul' />
                    <br></br>
                    <br></br>
                    <BoxExtrato text='Trocar os Pontos' />
                    <div className='cardsParceiros'>
                        <BotaoCards className='iptu' texto='R$500,00 a cada 2.000 pontos'
                         eventoOnClick={handleConfirmButtonClick} img={IPTU} />
                        <BotaoCards className='ifood' texto='R$50,00 a cada 500 pontos' 
                        eventoOnClick={handleConfirmButtonClick} img={ifood}/>
                        <BotaoCards className='dotz' texto='R$50,00 a cada 500 pontos'
                        eventoOnClick={handleConfirmButtonClick} img={dotz} />
                        <BotaoCards className='supbh'texto='R$50,00 a cada 500 pontos' 
                        eventoOnClick={handleConfirmButtonClick} img={supbh}/>
                    </div>
                   
                </div>
                

            </main>
    )
};

export default Pontuacao;