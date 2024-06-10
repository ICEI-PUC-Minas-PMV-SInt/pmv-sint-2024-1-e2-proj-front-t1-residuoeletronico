import "./CelulaPerfil.css";
import BotaoRedP from "../buttons/BotaoRedP";

function CelulaPerfil({ agendamentos, onCancel, endereco }) {
  const renderItens = (itens) => {
    return itens.map((item) => `${item.quantidade}x ${item.item}`).join(", ");
  };

  return (
    <>
      {agendamentos.map((agendamento, index) => (
        <tr key={index} className="celulaPerfil">
          <td>{agendamento.selectedDate}</td>
          <td>{agendamento.selectedHour}</td>
          <td>
            {endereco.rua}, {endereco.numero_casa}, Bairro {endereco.bairro} - {endereco.numero_cep}
          </td>
          <td>{renderItens(agendamento.selectedItemOptions)}</td>
          <td> <BotaoRedP texto='Cancelar agendamento' eventoOnClick={() => onCancel(index)} /> </td>
        </tr>
      ))}
    </>
  );
}

export default CelulaPerfil;

