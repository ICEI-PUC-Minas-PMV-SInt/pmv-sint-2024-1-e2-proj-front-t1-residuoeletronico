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
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const infoUsuarioAtual = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (Object.keys(infoUsuarioAtual).length > 0) {
      setDadosUsuario(infoUsuarioAtual);
      setEditData(infoUsuarioAtual);
      setAgendamentos(infoUsuarioAtual.agendamentos || []);
    }
  }, []);

  const handleCancelarAgendamento = (index) => {
    const updatedAgendamentos = agendamentos.filter((_, i) => i !== index);
    const pontosRemovidos = agendamentos[index].pontuacaoTotal;
    
    const updatedPontuacao = dadosUsuario.pontuacao - pontosRemovidos;
    const updatedUser = { ...dadosUsuario, agendamentos: updatedAgendamentos, pontuacao: updatedPontuacao };

    setAgendamentos(updatedAgendamentos);
    setDadosUsuario(updatedUser);
    setEditData(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserIndex = users.findIndex(user => user.username === updatedUser.username);
    if (currentUserIndex !== -1) {
      users[currentUserIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Agendamento cancelado!");
  };

  const navegarPontuacao = () => {
    navigate("/Pontuacao");
  };

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "0");
    navigate("/");
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
    setDadosUsuario(editData);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(user =>
      user.username === dadosUsuario.username ? editData : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(editData));

    alert("Dados atualizados com sucesso!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
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
          <DivInfos dados={dadosUsuario} isEditing={isEditing} handleChange={handleChange} editData={editData} />
          <div className="divBotaoAlterar">
            {isEditing ? (
              <BotaoVerdeM texto="Salvar" evento={handleSaveButtonClick} />
            ) : (
              <BotaoVerdeM texto="Alterar dados" evento={handleEditButtonClick} />
            )}
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
