import "./DivSeletor.css";
import SeletorItens from "./SeletorItens";
import BoxAzulTitulo from "../textBox/BoxAzulTitulo";

function DivSeletor({titulo, selecaoDe, onOptionChange}) {
  return (
    <div className="divSeletor">
      <BoxAzulTitulo texto={titulo} />
      <SeletorItens selecaoDe={selecaoDe} onOptionChange={onOptionChange}/>
    </div>
  );
}

export default DivSeletor;
