import "./TemplateSPA.css";
import "./ConfirmaTrocaPontos.css";
import { useLocation } from 'react-router-dom';

function ConfirmaTrocaPontos() {
  const location = useLocation();
  const { valor } = location.state || { valor: '' };

  return (
    <main className="mainConfirmacao">
      <div className="containerConfirmacao">
        <h1>Troca realizada com sucesso!</h1>
        <p>
          Você terá direito a {valor}!
        </p>
      </div>
    </main>
  );
}

export default ConfirmaTrocaPontos;
