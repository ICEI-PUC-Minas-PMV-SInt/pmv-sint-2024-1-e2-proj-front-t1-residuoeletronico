import './BotaoCards.css'

function BotaoCards({className, texto, eventoOnClick, img}){
    return (<button className={`botao-card ${className}`} onClick={eventoOnClick}>
        <img src={img} alt={texto} className="card-img" />
        <p>{texto}</p>
        </button>)
}

export default BotaoCards