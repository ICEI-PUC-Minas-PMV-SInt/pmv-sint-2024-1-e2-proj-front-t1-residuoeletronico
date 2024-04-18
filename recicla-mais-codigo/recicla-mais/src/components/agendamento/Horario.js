import BotaoAgendamento from "./BotaoAgendamento"
import "./Horario.css"

function Horario() {
    return (
        <div className='boxHorario'>
            <div className="boxHorario_titulo"><h1>Horário</h1></div>
            <BotaoAgendamento classeCSS='boxHorario_horario' tagTexto='p' texto='09:00 - 11:00'/>
            <BotaoAgendamento classeCSS='boxHorario_horario' tagTexto='p' texto='13:00 - 15:00'/>
            <BotaoAgendamento classeCSS='boxHorario_horario' tagTexto='p' texto='15:30 - 17:30'/>
        </div>
    )
}

export default Horario