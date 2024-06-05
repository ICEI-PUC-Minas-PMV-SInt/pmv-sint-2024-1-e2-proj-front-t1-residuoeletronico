


import React from "react";
import "./CelulaConfirmacao.css";

function CelulaConfirmacao({ agendamento, dadosUsuario }) {
  return (
      <tr className='celulaConfirmacao'>
        <td>{agendamento.selectedDate}</td>
        <td>{agendamento.selectedHour}</td>
        <td>{dadosUsuario.rua}, {dadosUsuario.numero_casa}, Bairro {dadosUsuario.bairro} - {dadosUsuario.numero_cep}</td>
      </tr>
  );
}

export default CelulaConfirmacao;
