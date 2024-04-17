import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BoxEndereco from "../components/textBox/BoxEndereco";
import BoxTitulo from "../components/textBox/BoxTitulo";
import Calendario from "../components/agendamento/Calendario";
import "./TemplateSPA.css";
import "./Agendamento.css";


function Agendamento() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main className="mainContainer">

        <div className="blocoDiaHorario">
          <BoxEndereco />
          <BoxTitulo text='Selecione o dia e horário disponíveis:' />
          <div className="blocoDiaHorario_calendarioHora">
            <Calendario />
          </div>
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Agendamento;
