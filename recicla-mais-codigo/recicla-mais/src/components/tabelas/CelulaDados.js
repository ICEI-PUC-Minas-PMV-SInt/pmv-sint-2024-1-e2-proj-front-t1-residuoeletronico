import './CelulaDados.css'

function CelulaDados({dados}) {
    return (<tr className='celulaDados'>
        <td>{dados.nome_completo}</td>
        <td>{dados.endereco}</td>
        <td>{dados.numero_telefone}</td>
    </tr>)
}

export default CelulaDados