import './BotaoVerdeG.css'

function BotaoVerdeG({texto, eventoOnClick}){
    return (<button className='botaoVerdeG' onClick={eventoOnClick}><h1>{texto}</h1></button>)
}

export default BotaoVerdeG