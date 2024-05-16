import "./TemplateSPA.css";
import "./Agendamento.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxEndereco from "../components/textBox/BoxEndereco";
import BoxTitulo from "../components/textBox/BoxTitulo";
import Caminhao from "../components/agendamento/Caminhao";
import DivSeletor from "../components/agendamento/DivSeletor";
import BotaoAdd from "../components/buttons/BotaoAdd";
import TabelaAzul from "../components/tabelas/TabelaAzul";
import CelulaAgendamento from "../components/tabelas/CelulaAgendamento";
import DivPontuacaoTotal from "../components/agendamento/DivPontuaçãoTotal";
import CelulaDados from "../components/tabelas/CelulaDados";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";
import BotaoRedG from "../components/buttons/BotaoRedG";
import Input from "../components/inputs/Input";
import BoxAzulTitulo from "../components/textBox/BoxAzulTitulo";
import Seletor from "../components/seletores/Seletor";

function Agendamento() {
  const navigate = useNavigate();

  // Estado para armazenar a seleção de data
  const [selectedDate, setSelectedDate] = useState("");

  // Função chamada quando a data é selecionada
  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // Obtém a data selecionada
    const [year, month, day] = selectedDate.split("-"); // Divide a data nos componentes year, month e day
    const formattedDate = `${day}/${month}/${year}`; // Formata a data no formato dd/mm/yyyy
    setSelectedDate(formattedDate); // Atualiza o estado com a data formatada
  };

  // Estado para armazenar a seleção de horário
  const [selectedHour, setSelectedHour] = useState("");

  const opcoesHorario = ["", "09:00 - 11:00", "13:00 - 15:00", "15:30 - 17:30"];

  const handleHourOptionChange = (e) => {
    setSelectedHour(e.target.value);
  };

  // Estado para armazenar as seleções de itens feitas pelo usuário
  const [selectedItemOptions, setSelectedItemOptions] = useState([]);
  //Estado para armazenar a seleção atual de itens
  const [currentItemSelection, setCurrentItemSelection] = useState({
    item: "",
    quantidade: "",
    qualidade: "",
  });

  // Função chamada quando uma opção de item é alterada
  const handleItemOptionChange = (option, selecaoDe) => {
    setCurrentItemSelection((prevSelection) => ({
      ...prevSelection, // Aqui prevSelection representa o valor atual do estado currentSelection
      [selecaoDe]: option, // Atualiza a seleção atual de acordo com o tipo de seleção
    }));
  };

  // Função chamada quando o botão de adicionar é clicado
  const handleAddButtonClick = () => {
    if (
      !currentItemSelection.item ||
      !currentItemSelection.quantidade ||
      !currentItemSelection.qualidade
    ) {
      alert("Por favor preencha todos os campos antes de adicionar");
      return;
      //Adiciona a nova opção apenas se todos os campos estiverem preenchidos
    } else {
      //Calcula os pontos para o novo item adicionado
      const pontos = calculaPontos(
        currentItemSelection.item,
        parseInt(currentItemSelection.quantidade)
      );

      // Cria um novo objeto com todas as informações do item, incluindo os pontos
      const newItem = {
        item: currentItemSelection.item,
        quantidade: currentItemSelection.quantidade,
        qualidade: currentItemSelection.qualidade,
        pontos: pontos,
      };

      // Adiciona o novo item às selectedItemOptions
      setSelectedItemOptions((prevOptions) => [...prevOptions, newItem]);
    }
  };

  // Função chamada quando o botão de remover item é clicado
  const handleRemoveButtonClick = (index) => {
    setSelectedItemOptions((prevOptions) =>
      prevOptions.filter((option, i) => i !== index)
    );
  };

  const headersAgendamento = ["Item:", "Qtde.:", "Qualidade:", "Pontos:", ""];

  // Função para calcular os pontos de acordo com o tipo de item e a quantidade de itens selecionados
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
    return pontuacao * quantidade;
  }

  const calcularPontuacaoTotal = () => {
    let total = 0;
    selectedItemOptions.forEach((option) => {
      total += calculaPontos(option.item, parseInt(option.quantidade));
    });
    return total;
  };

  const headersDados = ["Nome:", "Endereço:", "Telefone:"];

  const handleConfirmButtonClick = () => {
    //Verifica se algum campo está vazio
    if (!selectedDate || !selectedHour || !selectedItemOptions) {
      alert(
        "Por favor preencha todas as informações necessárias para o agendamento"
      );
      return;
    } else {
      //Verifica se já existe um objeto salvo no localStorage
      const existingInfo = JSON.parse(localStorage.getItem("infoAgendamento")) || [];

      //Agrupa os dados em um único objeto
      const infoAgendamento = {
        selectedDate: selectedDate,
        selectedHour: selectedHour,
        selectedItemOptions: selectedItemOptions, 
        pontuacaoTotal: calcularPontuacaoTotal()
      }

      const newInfo = [...existingInfo, infoAgendamento]

      // Salvar o objeto contendo todas as informações no localStorage
      localStorage.setItem('infoAgendamento', JSON.stringify(newInfo))

      // Navegar para a outra tela
      navigate("/ConfirmaAgendamento");
    }
  };

  const handleCancelButtonClick = () => {
    navigate("/HomePage");
  };

  return (
    <main className="mainContainer">
      <div className="blocoDiaHorario">
        <BoxEndereco />
        <BoxTitulo text="Selecione o dia e horário disponíveis:" />
        <div className="blocoDiaHorario_calendarioHora">
          <div className="divData">
            <BoxAzulTitulo texto="Data:" />
            <Input
              classeCSS="divData_Input"
              labelFor="dataAgendamento"
              type="date"
              name="dataAgendamento"
              id="dataAgendamento"
              placeholder="Escolha uma data"
              eventoOnChange={handleDateChange}
            />
          </div>
          <div className="divHorario">
            <BoxAzulTitulo texto="Horário:" />
            <Seletor
              classeCSS="seletorHorario"
              opcoes={opcoesHorario}
              eventoOnChange={handleHourOptionChange}
            />
          </div>
        </div>
      </div>
      <Caminhao classeCSS="caminhaoInicio" />

      <div className="blocoSeletores">
        <BoxTitulo text="Selecione os itens a serem coletados:" />
        <div className="blocoSeletores_divSeletores">
          <DivSeletor
            titulo="Item"
            selecaoDe="item"
            onOptionChange={(option) => handleItemOptionChange(option, "item")}
          />
          <DivSeletor
            titulo="Quantidade"
            selecaoDe="quantidade"
            onOptionChange={(option) =>
              handleItemOptionChange(option, "quantidade")
            }
          />
          <DivSeletor
            titulo="Qualidade"
            selecaoDe="qualidade"
            onOptionChange={(option) =>
              handleItemOptionChange(option, "qualidade")
            }
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
              selectedOptions={selectedItemOptions}
              removeOption={handleRemoveButtonClick}
              calculaPontos={calculaPontos}
            />
          }
        />
        <DivPontuacaoTotal pontuacaoTotal={calcularPontuacaoTotal()} />
      </div>
      <Caminhao classeCSS="caminhaoMeio" />

      <div className="blocoConfirmeDados">
        <BoxTitulo text="Confirme seus dados:" />
        <div className="divTabelaDados">
          <TabelaAzul
            headersTabela={headersDados}
            corpoTabela={<CelulaDados />}
          />
        </div>
      </div>
      <Caminhao classeCSS="caminhaoFim" />

      <div className="divBotoesAgendamento">
        <BotaoRedG texto="Cancelar" eventoOnClick={handleCancelButtonClick} />
        <BotaoVerdeG
          texto="Confirmar Agendamento"
          eventoOnClick={handleConfirmButtonClick}
        />
      </div>
    </main>
  );
}

export default Agendamento;
