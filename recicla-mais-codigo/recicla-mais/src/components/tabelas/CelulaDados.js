import './CelulaDados.css'

function CelulaDados({dados}) {
    return (<tr className='celulaDados'>
        <td>{dados.nome_completo}</td>
        <td>{dados.rua}, {dados.numero_casa}, Bairro {dados.bairro} - {dados.numero_cep}</td>
        <td>{dados.numero_telefone}</td>
    </tr>)
}

export default CelulaDados