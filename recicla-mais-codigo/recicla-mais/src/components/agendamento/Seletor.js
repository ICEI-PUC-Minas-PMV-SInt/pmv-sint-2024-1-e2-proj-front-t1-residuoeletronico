import { useState } from "react";
import "./Seletor.css";

function Seletor({ selecaoDe, onOptionChange}) {
  //Estado para armazenar a opção selecionada
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  let opcoes = [];

  switch (selecaoDe) {
    case "item":
      opcoes = ["", "Notebook", "Celular", "Tablet", "Computador"];

      break;

    case "quantidade":
      opcoes = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      break;

    case "qualidade":
      opcoes = [
        "",
        "Novo",
        "Pouco danificado",
        "Muito danificado",
        "Completamente danificado",
      ];
      break;

    default:
      opcoes = [""];
      break;
  }

  const handleSelectChange = (event) => {
    setOpcaoSelecionada(event.target.value); //Atualiza o estado com a opção selecionada
    onOptionChange(event.target.value); // Chama a função de callback passando o valor selecionado
  };

  return (
    <select
      id={selecaoDe}
      name={selecaoDe}
      value={opcaoSelecionada}
      onChange={handleSelectChange}
    >
      {opcoes.map((opcao) => (
        <option key={opcao} value={opcao}>
          {opcao}
        </option>
      ))}
    </select>
  );
}

export default Seletor;
