import "./CelulaPerfil.css";
import BotaoRedP from "../buttons/BotaoRedP";

function CelulaPerfil({ agendamentos, onCancel }) {
  const renderItens = (itens) => {
    return itens.map((item) => `${item.quantidade}x ${item.item}`).join(",");
  };

  return (
    <>
      {agendamentos.map((agendamento, index) => (
        <tr key={index} className="celulaPerfil">
          <td>{agendamento.selectedDate}</td>
          <td>{agendamento.selectedHour}</td>
          <td>
            R. Exemplo de Endereço, XXXX - Bairro, Belo Horizonte - MG,
            XXXXX-XXX
          </td>
          <td>{renderItens(agendamento.selectedItemOptions)}</td>
          <td> <BotaoRedP texto='Cancelar agendamento' eventoOnClick={() => onCancel(index)} /> </td>
        </tr>
      ))}
    </>
  );
}

export default CelulaPerfil;
