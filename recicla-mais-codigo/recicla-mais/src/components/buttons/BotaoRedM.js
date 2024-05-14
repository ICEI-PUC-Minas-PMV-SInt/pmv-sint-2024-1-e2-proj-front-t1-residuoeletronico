import './BotaoRedM.css';

function BotaoRedM({evento, texto}) {
    return (<button className='botaoRedM' onClick={evento}>{texto}</button>)
}

export default BotaoRedM