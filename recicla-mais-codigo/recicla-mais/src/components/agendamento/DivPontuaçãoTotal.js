import "./DivPontuacaoTotal.css";

function DivPontuacaoTotal({ pontuacaoTotal }) {
  return (
    <div className="containerPontuacao">
      <div className='divTextoPontuacao'>
        <h1>Pontuação Total:</h1>
      </div>
      <div className="divPontuacao">{pontuacaoTotal}</div>
    </div>
  );
}

export default DivPontuacaoTotal;
