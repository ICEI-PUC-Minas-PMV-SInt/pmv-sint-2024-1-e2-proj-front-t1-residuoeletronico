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
import BotaoRedM from "../components/buttons/BotaoRedM";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaPerfil from "../components/tabelas/CelulaPerfil";

function Perfil() {
  const navigate = useNavigate();
  const headersAgendamento = ["Data:", "Horário:", "Endereço:", "Itens:", ""];

  const [agendamentos, setAgendamentos] = useState([]);
  const [dadosUsuario, setDadosUsuario] = useState({});

  useEffect(() => {
    const storedAgendamentos =
      JSON.parse(localStorage.getItem("infoAgendamento")) || [];
    setAgendamentos(storedAgendamentos);

    const infoUsuarioAtual = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (Object.keys(infoUsuarioAtual).length > 0) {
      setDadosUsuario(infoUsuarioAtual);
    }
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

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "0"); // Define a chave 'loggedIn' como '0' para indicar que o usuário está deslogado
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <main className="mainPerfil">
      <aside>
        <CardNome />

        <CardPontuacaoPerfil />
        <BotaoTrocarPontos evento={navegarPontuacao} />
        <div className="divBotaoLogout">
          <BotaoRedM texto="Logout" evento={handleLogout} />
        </div>
      </aside>
      <section>
        <div className="divDadosPerfil">
          <TituloAzul titulo="Dados:" />
          <DivInfos dados={dadosUsuario} />
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
                endereco={dadosUsuario}
              />
            }
          />
        </div>
      </section>
    </main>
  );
}

export default Perfil;
