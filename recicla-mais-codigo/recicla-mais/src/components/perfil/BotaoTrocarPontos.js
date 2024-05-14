import "./BotaoTrocarPontos.css";
import IconeTrocar from '../../imgs/icone_troca.png'

function BotaoTrocarPontos(props) {
  return (
    <button className="botaoTrocarPontos" onClick={props.evento}>
      <img src={IconeTrocar} alt="icone_troca" />
      Troque seus pontos
    </button>
  );
}

export default BotaoTrocarPontos;
