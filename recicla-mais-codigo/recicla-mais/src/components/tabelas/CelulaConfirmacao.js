import './CelulaConfirmacao.css'

function CelulaConfirmacao(){
const dadosAgendamento = JSON.parse(localStorage.getItem('infoAgendamento'))
const ultimoAgendamento = dadosAgendamento[dadosAgendamento.length - 1]

    return (<tr>
<td>{ultimoAgendamento.selectedDate}</td>
<td>{ultimoAgendamento.selectedHour}</td>
<td>R.Exemplo de Endereço, XXXX - Bairro, Belo Horizonte - MG, XXXXX-XXX</td>
    </tr>)
}

export default CelulaConfirmacao