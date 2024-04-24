import './BotaoRedG.css'

function BotaoRedG({texto, eventoOnClick}){
    return <button className='botaoRedG' onClick={eventoOnClick}><h1>{texto}</h1></button>
}

export default BotaoRedG