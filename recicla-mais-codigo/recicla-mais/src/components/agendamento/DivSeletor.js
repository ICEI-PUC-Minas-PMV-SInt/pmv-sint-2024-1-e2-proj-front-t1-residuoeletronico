import "./DivSeletor.css";
import Seletor from "./Seletor";
import BoxAzulTitulo from "../textBox/BoxAzulTitulo";

function DivSeletor({titulo, selecaoDe, onOptionChange}) {
  return (
    <div className="divSeletor">
      <BoxAzulTitulo texto={titulo} />
      <Seletor selecaoDe={selecaoDe} onOptionChange={onOptionChange} />
    </div>
  );
}

export default DivSeletor;
