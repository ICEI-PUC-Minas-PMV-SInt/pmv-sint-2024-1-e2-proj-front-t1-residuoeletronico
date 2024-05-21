import './BotaoCards.css'

function BotaoCards({texto, eventoOnClick, img}){
    return (<button className='botaoCards' onClick={eventoOnClick}>
        <img src={img} alt='exemplo' />
        <h1>{texto}</h1>
        </button>)
}

export default BotaoCards