import './BotaoAzul.css'

function BotaoAzul({texto, eventoOnClick}){
    return (<button className='botaoAzul' onClick={eventoOnClick}>
        <h1>{texto}</h1>
        </button>)
}

export default BotaoAzul