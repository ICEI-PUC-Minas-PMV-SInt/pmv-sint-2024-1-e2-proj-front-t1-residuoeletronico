import "./TemplateSPA.css";
import "./ConfirmaAgendamento.css";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaConfirmacao from "../components/tabelas/CelulaConfirmacao";

function ConfirmaAgendamento() {
    const headersConfirmacao = ['Data:', 'Horário:', 'Endereço:']
  return (
    <main className="mainConfirmacao">
      <div className="containerConfirmacao">
        <h1>Agendamento Confirmado!</h1>
        <p>
          O caminhão fará a coleta dos itens na data, faixa de horário e local
          informados no agendamento. Esteja disponível para recebê-lo.
        </p>
        <TabelaAzul headersTabela={headersConfirmacao} corpoTabela={<CelulaConfirmacao />}/>
      </div>
    </main>
  );
}

export default ConfirmaAgendamento;
