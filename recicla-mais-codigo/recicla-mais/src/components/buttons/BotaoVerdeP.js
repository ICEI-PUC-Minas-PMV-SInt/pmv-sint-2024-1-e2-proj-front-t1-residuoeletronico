import './BotaoVerdeP.css';

function BotaoVerdeP({evento, texto}) {
    return (<button className='botaoVerdeP' onClick={evento}>{texto}</button>)
}

export default BotaoVerdeP