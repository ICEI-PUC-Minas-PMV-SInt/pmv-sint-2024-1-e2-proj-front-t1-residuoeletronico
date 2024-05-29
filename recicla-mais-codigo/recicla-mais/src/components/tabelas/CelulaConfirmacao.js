import './CelulaConfirmacao.css'

function CelulaConfirmacao({dados}){
const dadosAgendamento = JSON.parse(localStorage.getItem('infoAgendamento'))
const ultimoAgendamento = dadosAgendamento[dadosAgendamento.length - 1]

    return (<tr className='celulaConfirmacao'>
<td>{ultimoAgendamento.selectedDate}</td>
<td>{ultimoAgendamento.selectedHour}</td>
<td>{dados.rua}, {dados.numero_casa}, Bairro {dados.bairro} - {dados.numero_cep}</td>
    </tr>)
}

export default CelulaConfirmacao