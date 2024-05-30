import './CelulaExtrato.css';

function CelulaExtrato({ agendamentos, calculaPontos }) {
    return (
        <>
            {agendamentos.map((agendamento, index) => (
                agendamento.selectedItemOptions.map((option, idx) => (
                    <tr key={`${index}-${idx}`}>
                        <td>{agendamento.selectedDate}</td>
                        <td>{option.quantidade}</td>
                        <td>{option.item}</td>
                        <td>{calculaPontos(option.item, parseInt(option.quantidade))}</td>
                    </tr>
                ))
            ))}
        </>
    );
}

export default CelulaExtrato;
