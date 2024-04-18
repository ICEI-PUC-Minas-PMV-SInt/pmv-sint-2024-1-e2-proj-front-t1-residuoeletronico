import "./TemplateSPA.css";
import "./Agendamento.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BoxEndereco from "../components/textBox/BoxEndereco";
import BoxTitulo from "../components/textBox/BoxTitulo";
import Calendario from "../components/agendamento/Calendario";
import Horario from "../components/agendamento/Horario";
import Caminhao from "../components/agendamento/Caminhao";
import DivSeletor from "../components/agendamento/DivSeletor";
import BotaoAdd from "../components/buttons/BotaoAdd";

function Agendamento() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main className="mainContainer">

        <div className="blocoDiaHorario">
          <BoxEndereco />
          <BoxTitulo text="Selecione o dia e horário disponíveis:" />
          <div className="blocoDiaHorario_calendarioHora">
            <Calendario />
            <Horario />
          </div>
        </div>
        <Caminhao classeCSS='caminhaoInicio' />

        <div className="blocoSeletores">
          <BoxTitulo text="Selecione os itens a serem coletados:" />
          <div className="blocoSeletores_divSeletores">
            <DivSeletor titulo='Item' selecaoDe='itens'/>
            <DivSeletor titulo='Quantidade' selecaoDe='quantidade' />
            <DivSeletor titulo='Qualidade' selecaoDe='qualidade' />
          </div>
          <BotaoAdd />      
        </div>
        <div className="itensAdicionados">
          <h1>Itens Adicionados:</h1>
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Agendamento;
