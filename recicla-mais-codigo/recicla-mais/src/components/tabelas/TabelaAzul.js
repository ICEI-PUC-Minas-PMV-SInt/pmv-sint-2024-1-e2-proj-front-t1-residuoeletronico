import './TabelaAzul.css'

function TabelaAzul({headersTabela, corpoTabela}) {
    return (
        <table className='tabelaAzul'>
            <thead>
                <tr>
                    {headersTabela.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {corpoTabela}
            </tbody>
        </table>
    )
}

export default TabelaAzul