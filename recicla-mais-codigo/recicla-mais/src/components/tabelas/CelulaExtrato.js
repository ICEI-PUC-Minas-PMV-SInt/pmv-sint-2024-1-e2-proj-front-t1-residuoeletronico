import './CelulaExtrato.css'

function CelulaExtrato({selectedOptions, calculaPontos}) {
    return (
        <>
        {selectedOptions.map((option, index) => (
            <tr key={index}>
              <td>{option.item}</td>
              <td>{option.quantidade}</td>
              <td>{option.qualidade}</td>
              <td>{calculaPontos(option.item, parseInt(option.quantidade))}</td>
            </tr>
          ))}
        </>
      );
    }

export default CelulaExtrato;