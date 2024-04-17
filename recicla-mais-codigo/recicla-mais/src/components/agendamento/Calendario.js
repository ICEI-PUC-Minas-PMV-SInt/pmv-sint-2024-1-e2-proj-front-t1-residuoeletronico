import "./Calendario.css"
import SetaEsquerda from "../../imgs/setaEsquerda.png"
import SetaDireita from "../../imgs/setaDireita.png"

function Calendario() {
    return (
        <div className="boxCalendario">
            <div className="boxCalendario_header">
                <div className="boxCalendario_headerSetas">
                   <button><img src={SetaEsquerda} alt='mes-anterior'/></button> 
                   <button><img src={SetaDireita} alt='proximo-mes'/></button>
                </div>
                <h1>Mês</h1>
                <h1>Ano</h1>     
            </div>
            <div className="boxCalendario_main"></div>
        </div>
    )
    
}

export default Calendario