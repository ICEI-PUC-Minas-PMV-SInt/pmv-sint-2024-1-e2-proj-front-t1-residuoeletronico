import "./CardPontuacaoPerfil.css";
import { useEffect, useState } from "react";

function CardPontuacaoPerfil() {
  const [pontuacaoTotalAgendamentos, setPontuacaoTotalAgendamentos] = useState(0)
  
  useEffect(() => {const agendamentos = JSON.parse(localStorage.getItem('infoAgendamento')) || []

  let total = 0;
  agendamentos.forEach((agendamento) => {total += agendamento.pontuacaoTotal;})

  setPontuacaoTotalAgendamentos(total);}, [])

  return (
    <div className="cardPontuacaoPerfil">
      <p>Você tem</p>
      <h1>{pontuacaoTotalAgendamentos}</h1>
      <p>pontos acumulados</p>
    </div>
  );
}

export default CardPontuacaoPerfil;
