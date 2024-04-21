import "./BotaoRedP.css"

function BotaoRedP({texto, eventoOnClick}){
    return <button className="botaoRedP" onClick={eventoOnClick}>{texto}</button>
}   

export default BotaoRedP