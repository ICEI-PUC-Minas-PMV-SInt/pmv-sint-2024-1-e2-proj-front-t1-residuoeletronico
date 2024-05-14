import './BotaoCards.css'

function BotaoCards({texto, eventoOnClick}){
    return (<button className='botaoCards' onClick={eventoOnClick}>
        <h1>{texto}</h1>
        </button>)
}

export default BotaoCards