import "./TemplateSPA.css";
import "./Agendamento.css";
import BoxEndereco from "../components/textBox/BoxEndereco";
import BoxTitulo from "../components/textBox/BoxTitulo";
import Calendario from "../components/agendamento/Calendario";
import Horario from "../components/agendamento/Horario";
import Caminhao from "../components/agendamento/Caminhao";
import DivSeletor from "../components/agendamento/DivSeletor";
import BotaoAdd from "../components/buttons/BotaoAdd";
import { useState } from "react";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaAgendamento from "../components/tabelas/CelulaAgendamento";
import DivPontuacaoTotal from "../components/agendamento/DivPontuaçãoTotal";

function Agendamento() {
  // Estado para armazenar as seleções feitas pelo usuário
  const [selectedOptions, setSelectedOptions] = useState([]);
  //Estado para armazenar a seleção atual
  const [currentSelection, setCurrentSelection] = useState({
    item: "",
    quantidade: "",
    qualidade: "",
  });

  // Função chamada quando uma opção é alterada
  const handleOptionChange = (option, selecaoDe) => {
    setCurrentSelection((prevSelection) => ({
      ...prevSelection, // Aqui prevSelection representa o valor atual do estado currentSelection
      [selecaoDe]: option, // Atualiza a seleção atual de acordo com o tipo de seleção
    }));
  };

  // Função chamada quando o botão de adicionar é clicado
  const handleAddButtonClick = () => {
    setSelectedOptions((prevOptions) => [...prevOptions, currentSelection]);
  };

  const handleRemoveButtonClick = (index) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option, i) => i !== index)
    );
  };

  const headersAgendamento = ["Item:", "Qtde.:", "Qualidade:", "Pontos:", ""];

  function calculaPontos(item, quantidade) {
    let pontuacao = 0;
    switch (item) {
      case "Notebook":
        pontuacao = 500;
        break;
      case "Computador":
        pontuacao = 600;
        break;
      case "Celular":
        pontuacao = 800;
        break;
      case "Tablet":
        pontuacao = 900;
        break;

      default:
        break;
    }
     return pontuacao*quantidade;
  }

  const calcularPontuacaoTotal = () => {
    let total = 0;
    selectedOptions.forEach((option) => {total += calculaPontos(option.item, parseInt(option.quantidade))});
    return total
  }

  return (
    <main className="mainContainer">
      <div className="blocoDiaHorario">
        <BoxEndereco />
        <BoxTitulo text="Selecione o dia e horário disponíveis:" />
        <div className="blocoDiaHorario_calendarioHora">
          <Calendario />
          <Horario />
        </div>
      </div>
      <Caminhao classeCSS="caminhaoInicio" />

      <div className="blocoSeletores">
        <BoxTitulo text="Selecione os itens a serem coletados:" />
        <div className="blocoSeletores_divSeletores">
          <DivSeletor
            titulo="Item"
            selecaoDe="item"
            onOptionChange={(option) => handleOptionChange(option, "item")}
          />
          <DivSeletor
            titulo="Quantidade"
            selecaoDe="quantidade"
            onOptionChange={(option) =>
              handleOptionChange(option, "quantidade")
            }
          />
          <DivSeletor
            titulo="Qualidade"
            selecaoDe="qualidade"
            onOptionChange={(option) => handleOptionChange(option, "qualidade")}
          />
        </div>
        <BotaoAdd evento={handleAddButtonClick} />
      </div>
      <div className="itensAdicionados">
        <h1>Itens Adicionados:</h1>
        <TabelaAzul
          headersTabela={headersAgendamento}
          corpoTabela={
            <CelulaAgendamento
              selectedOptions={selectedOptions}
              removeOption={handleRemoveButtonClick}
              calculaPontos={calculaPontos}
            />
          }
        />
        <DivPontuacaoTotal pontuacaoTotal={calcularPontuacaoTotal()}/>
      </div>
    </main>
  );
}

export default Agendamento;
