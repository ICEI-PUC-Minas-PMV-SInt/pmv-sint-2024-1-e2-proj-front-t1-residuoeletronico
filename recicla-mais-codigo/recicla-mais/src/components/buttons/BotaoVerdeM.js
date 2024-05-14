import './BotaoVerdeM.css';

function BotaoVerdeP({evento, texto}) {
    return (<button className='botaoVerdeM' onClick={evento}>{texto}</button>)
}

export default BotaoVerdeP