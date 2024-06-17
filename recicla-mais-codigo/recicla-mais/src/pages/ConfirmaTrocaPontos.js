import "./TemplateSPA.css";
import "./ConfirmaTrocaPontos.css";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from "react";

function ConfirmaTrocaPontos() {
  useEffect(() => {
    window.scrollTo(0, 0); // Move o scroll para o topo do viewport quando a tela é montada
  }, []);
  const location = useLocation();
  const { valor } = location.state || { valor: '' };

  return (
    <main className="mainConfirmacao">
      <div className="containerConfirmacao">
        <h1>Troca realizada com sucesso!</h1>
        <p>
          Você terá direito a {valor}!
        </p>
      </div>
    </main>
  );
}

export default ConfirmaTrocaPontos;
