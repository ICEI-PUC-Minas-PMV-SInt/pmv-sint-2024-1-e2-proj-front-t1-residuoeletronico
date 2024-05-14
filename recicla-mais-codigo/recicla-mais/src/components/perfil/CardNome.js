import "./CardNome.css";
import IconePerfil from "../../imgs/icone_perfil.png"

function CardNome() {
  return (
    <div className="cardNome">
      <img src={IconePerfil} alt="icone_perfil"/>
      <h1> NOME </h1>
    </div>
  );
}

export default CardNome;
