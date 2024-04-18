import "./Seletor.css";

function Seletor({ selecaoDe }) {
  let opcoes = [];

  switch (selecaoDe) {
    case "itens":
      opcoes = ["Notebook", "Celular", "Tablet", "Computador"];

      break;

    case "quantidade":
      opcoes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      break;

    case "qualidade":
      opcoes = [
        "Novo",
        "Pouco danificado",
        "Muito danificado",
        "Completamente danificado",
      ];
      break;

    default:
      opcoes = [];
      break;
  }

  return (
    <select id={selecaoDe} name={selecaoDe} >
      {opcoes.map((opcao) => (
        <option key={opcao} value={opcao}>
          {opcao}
        </option>
      ))}
    </select>
  );
}

export default Seletor;
