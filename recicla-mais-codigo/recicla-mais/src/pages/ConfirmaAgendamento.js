import "./TemplateSPA.css";
import "./ConfirmaAgendamento.css";
import { useState, useEffect } from "react";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaConfirmacao from "../components/tabelas/CelulaConfirmacao";

function ConfirmaAgendamento() {
    const headersConfirmacao = ['Data:', 'Horário:', 'Endereço:']

    //Estado para armazenar dados do usuário recuperados do localStorage
  const [dadosUsuario, setDadosUsuario] = useState({});

  useEffect(() => {
    const infoUsuario = JSON.parse(localStorage.getItem("users")) || [];
    if (infoUsuario.length > 0) {
      setDadosUsuario(infoUsuario[0]);
    }
  }, [])

  return (
    <main className="mainConfirmacao">
      <div className="containerConfirmacao">
        <h1>Agendamento Confirmado!</h1>
        <p>
          O caminhão fará a coleta dos itens na data, faixa de horário e local
          informados no agendamento. Esteja disponível para recebê-lo.
        </p>
        <TabelaAzul headersTabela={headersConfirmacao} corpoTabela={<CelulaConfirmacao dados={dadosUsuario}/>}/>
      </div>
    </main>
  );
}

export default ConfirmaAgendamento;
