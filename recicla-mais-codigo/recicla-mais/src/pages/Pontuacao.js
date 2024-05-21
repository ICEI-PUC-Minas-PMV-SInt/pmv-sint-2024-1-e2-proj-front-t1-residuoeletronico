import './TemplateSPA.css';
import './Pontuacao.css';
import { Link, Navigate } from "react-router-dom";
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


function Pontuacao() {

    const headersExtrato = ["Data", "Produto", "Pontos"];

    const navigate = useNavigate();

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
                            corpoTabela={<CelulaExtrato />}
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