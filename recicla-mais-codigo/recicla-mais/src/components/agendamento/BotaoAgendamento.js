import React from 'react'

function BotaoAgendamento({classeCSS, tagTexto, texto}) {
    return (<button className={classeCSS}>
        {React.createElement(tagTexto, null, texto)}
    </button>)
}

export default BotaoAgendamento