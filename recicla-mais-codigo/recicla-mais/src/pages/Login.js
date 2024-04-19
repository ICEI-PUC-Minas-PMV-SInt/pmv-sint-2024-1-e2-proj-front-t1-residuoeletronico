import "./TemplateSPA.css";
import "./Login.css";
import { Link } from "react-router-dom";
import BoxTitulo from "../components/textBox/BoxTitulo";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";

function Login() {
  return (
    <main className="mainLogin">
      <div className="boxLogin">
        <BoxTitulo text="LOGIN" />

        <div className="divInputs">
          <input className="inputEmail" type="text" placeholder="Email" />

          <input className="inputSenha" type="text" placeholder="Senha" />
        </div>

        <BotaoVerdeG texto='ENTRAR'/>

        <div className="link">
          <Link to="/Cadastro">
            <h1>Ainda não possuo uma conta</h1>
          </Link>
          <br></br>
          <Link to="/">
            <h1>Esqueci minha senha</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
