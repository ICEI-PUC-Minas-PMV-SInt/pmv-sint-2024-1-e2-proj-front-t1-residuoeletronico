import "./TemplateSPA.css";
import "./TrocarSenha.css";
import { Link } from "react-router-dom";
import BoxTitulo from "../components/textBox/BoxTitulo";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";

function TrocarSenha() {
    
    return (
        
    <main className="mainLogin">
        <div className="boxLogin">
            <BoxTitulo text="Digite seu e-mail:" classeCSS="fontsize22" />

            <div className="divInputs">
                <input className="inputEmail" type="text" placeholder="Email"/>
            </div>

            <div className="linkEnviarEmail">
                <Link to="/Login">
                <BotaoVerdeG texto='ENVIAR'/>
                </Link>
            </div>

        </div>
    </main>
    );
}

export default TrocarSenha;