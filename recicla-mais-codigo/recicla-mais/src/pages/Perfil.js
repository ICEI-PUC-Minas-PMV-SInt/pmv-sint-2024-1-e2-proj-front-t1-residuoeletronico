import "./TemplateSPA.css";
import "./Perfil.css";
import CardNome from "../components/perfil/CardNome";
import CardPontuacaoPerfil from "../components/perfil/CardPontuacaoPerfil";
import BotaoTrocarPontos from "../components/perfil/BotaoTrocarPontos";
import TituloAzul from "../components/perfil/TituloAzul";
import DivInfos from "../components/perfil/DivInfos";
import BotaoVerdeM from "../components/buttons/BotaoVerdeM";
import TabelaAzul from "../components/tabelas/TabelaAzul";

import BotaoRedM from "../components/buttons/BotaoRedM";

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
            <BotaoVerdeM texto="Alterar dados" />
          </div>
        </div>
        <div className="divAgendamentoPerfil">
          <TituloAzul titulo="Próximo agendamento:" />
          <TabelaAzul headersTabela={headersAgendamento} />
          <div className="divBotaoCancelarAgendamento">
            <BotaoRedM texto='Cancelar agendamento' />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Perfil;
