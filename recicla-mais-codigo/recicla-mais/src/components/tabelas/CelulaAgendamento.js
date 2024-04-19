import BotaoRedP from "../buttons/BotaoRedP";
import "./CelulaAgendamento.css";

function CelulaAgendamento({ selectedOptions, removeOption }) {
  function calculaPontos(item) {
    switch (item) {
      case "Notebook":
        return 500;
      case "Computador":
        return 600;
      case "Celular":
        return 800;
      case "Tablet":
        return 900;

      default:
        break;
    }
  }

  return (
    <>
      {selectedOptions.map((option, index) => (
        <tr key={index}>
          <td>{option.item}</td>
          <td>{option.quantidade}</td>
          <td>{option.qualidade}</td>
          <td>{calculaPontos(option.item)}</td>
          <BotaoRedP texto='Remover' eventoOnClick={() => removeOption(index)}/>
        </tr>
      ))}
    </>
  );
}

export default CelulaAgendamento;
