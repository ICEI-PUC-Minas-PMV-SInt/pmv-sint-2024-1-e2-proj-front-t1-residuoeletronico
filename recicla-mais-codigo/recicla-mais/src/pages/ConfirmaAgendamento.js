import "./TemplateSPA.css";
import "./ConfirmaAgendamento.css";
import { useState, useEffect } from "react";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaConfirmacao from "../components/tabelas/CelulaConfirmacao";

function ConfirmaAgendamento() {
  const headersConfirmacao = ['Data:', 'Horário:', 'Endereço:'];
  //Estado para armazenar dados do usuário recuperados do localStorage
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [ultimoAgendamento, setUltimoAgendamento] = useState({});

  useEffect(() => {
    const infoUsuarioAtual = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (Object.keys(infoUsuarioAtual).length > 0) {
      setDadosUsuario(infoUsuarioAtual);
      const agendamentos = infoUsuarioAtual.agendamentos;
      if (agendamentos && agendamentos.length > 0) {
        setUltimoAgendamento(agendamentos[agendamentos.length - 1]);
      }
    }
  }, [])

  return (
    <main className="mainConfirmacao">
      <div className="containerConfirmacao">

          <h1>Agendamento Confirmado</h1>
          <p>
            Obrigado por utilizar nosso serviço! <br/>Seu agendamento foi confirmado com sucesso.
            <br/><br/>O caminhão fará a coleta dos itens na data, faixa de horário e local
            informados no agendamento.Esteja disponível para recebê-lo.
          </p>
          <TabelaAzul
            headersTabela={headersConfirmacao}
            corpoTabela={<CelulaConfirmacao agendamento={ultimoAgendamento} dadosUsuario={dadosUsuario} />}
          />
        </div>
    </main>
  );
}

export default ConfirmaAgendamento;
