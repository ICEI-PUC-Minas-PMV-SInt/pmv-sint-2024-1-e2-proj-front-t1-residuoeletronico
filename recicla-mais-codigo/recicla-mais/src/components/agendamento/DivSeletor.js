import "./DivSeletor.css";
import Seletor from "./Seletor";
import BoxAzulTitulo from "../textBox/BoxAzulTitulo";

function DivSeletor(props) {
  return (
    <div className="divSeletor">
      <BoxAzulTitulo texto={props.titulo} />
      <Seletor selecaoDe={props.selecaoDe} />
    </div>
  );
}

export default DivSeletor;
