import "./TemplateSPA.css";
import "./Perfil.css";
import CardNome from "../components/perfil/CardNome";
import CardPontuacaoPerfil from "../components/perfil/CardPontuacaoPerfil";
import BotaoTrocarPontos from "../components/perfil/BotaoTrocarPontos";
import TituloAzul from "../components/perfil/TituloAzul";
import DivInfos from "../components/perfil/DivInfos";
import BotaoVerdeP from "../components/buttons/BotaoVerdeP";
import TabelaAzul from "../components/tabelas/TabelaAzul";

function Perfil() {
  const headersAgendamento = ["Data:", "Horário:", "Endereço:", "Itens:"];
  return (
    <main className="mainPerfil">
      <aside>
        <CardNome />
        <CardPontuacaoPerfil />
        <BotaoTrocarPontos />
      </aside>
      <section>
        <div className="divDadosPerfil">
          <TituloAzul titulo="Dados:" />
          <DivInfos />
          <div className="divBotaoAlterar">
            <BotaoVerdeP texto="Alterar dados" />
          </div>
        </div>
        <div className="divAgendamentoPerfil">
          <TituloAzul titulo="Próximo agendamento:" />
          <TabelaAzul headersTabela={headersAgendamento} />
        </div>
      </section>
    </main>
  );
}

export default Perfil;
