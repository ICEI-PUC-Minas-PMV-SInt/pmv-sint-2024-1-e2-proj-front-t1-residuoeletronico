import "./CardPontuacaoPerfil.css";
import { useEffect, useState } from "react";

function CardPontuacaoPerfil() {
  const [pontuacaoTotalAgendamentos, setPontuacaoTotalAgendamentos] = useState(0);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (currentUser.pontuacao) {
      setPontuacaoTotalAgendamentos(currentUser.pontuacao);
    }
  }, []);

  return (
    <div className="cardPontuacaoPerfil">
      <p>Você tem</p>
      <h1>{pontuacaoTotalAgendamentos}</h1>
      <p>pontos acumulados</p>
    </div>
  );
}

export default CardPontuacaoPerfil;