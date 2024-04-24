import './CelulaConfirmacao.css'

function CelulaConfirmacao(){
const data = localStorage.getItem('selectedDate')
const horario = localStorage.getItem('selectedHour')
    return (<tr>
<td>{data}</td>
<td>{horario}</td>
<td>R.Exemplo de Endereço, XXXX - Bairro, Belo Horizonte - MG, XXXXX-XXX</td>
    </tr>)
}

export default CelulaConfirmacao