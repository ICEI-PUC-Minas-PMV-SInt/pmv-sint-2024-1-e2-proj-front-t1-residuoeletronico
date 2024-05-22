import "./TemplateSPA.css";
import "./Perfil.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardNome from "../components/perfil/CardNome";
import CardPontuacaoPerfil from "../components/perfil/CardPontuacaoPerfil";
import BotaoTrocarPontos from "../components/perfil/BotaoTrocarPontos";
import TituloAzul from "../components/perfil/TituloAzul";
import DivInfos from "../components/perfil/DivInfos";
import BotaoVerdeM from "../components/buttons/BotaoVerdeM";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaPerfil from "../components/tabelas/CelulaPerfil";

function Perfil() {
  const navigate = useNavigate();
  const headersAgendamento = ["Data:", "Horário:", "Endereço:", "Itens:", ""];

  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const storedAgendamentos =
      JSON.parse(localStorage.getItem("infoAgendamento")) || [];
    setAgendamentos(storedAgendamentos);
  }, []);

  const handleCancelarAgendamento = (index) => {
    const updatedAgendamentos = agendamentos.filter((_, i) => i !== index);
    setAgendamentos(updatedAgendamentos);
    localStorage.setItem(
      "infoAgendamento",
      JSON.stringify(updatedAgendamentos)
    );
    alert("Agendamento cancelado!");
  };

  const navegarPontuacao = () => {
    navigate("/Pontuacao");
  };

  return (
    <main className="mainPerfil">
      <aside>
        <CardNome />
        <CardPontuacaoPerfil />
        <BotaoTrocarPontos evento={navegarPontuacao} />
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
          <TituloAzul titulo="Próximos agendamentos:" />
          <TabelaAzul
            headersTabela={headersAgendamento}
            corpoTabela={
              <CelulaPerfil
                agendamentos={agendamentos}
                onCancel={handleCancelarAgendamento}
              />
            }
          />
        </div>
      </section>
    </main>
  );
}

export default Perfil;
