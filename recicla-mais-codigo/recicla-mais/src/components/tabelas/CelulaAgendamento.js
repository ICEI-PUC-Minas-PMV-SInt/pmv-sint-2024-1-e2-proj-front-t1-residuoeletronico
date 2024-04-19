import BotaoRedP from "../buttons/BotaoRedP";
import "./CelulaAgendamento.css";

function CelulaAgendamento({ selectedOptions, removeOption, calculaPontos }) {
 

  return (
    <>
      {selectedOptions.map((option, index) => (
        <tr key={index}>
          <td>{option.item}</td>
          <td>{option.quantidade}</td>
          <td>{option.qualidade}</td>
          <td>{calculaPontos(option.item, parseInt(option.quantidade))}</td>
          <td><BotaoRedP
            texto="Remover"
            eventoOnClick={() => removeOption(index)}
          /></td>
          
        </tr>
      ))}
    </>
  );
}

export default CelulaAgendamento;
