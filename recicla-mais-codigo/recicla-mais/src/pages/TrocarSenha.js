import "./TemplateSPA.css";
import "./TrocarSenha.css";
import BoxTitulo from "../components/textBox/BoxTitulo";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";

function TrocarSenha() {
    
    return (
        
    <main className="mainLogin">
        <div className="boxLogin">
            <BoxTitulo text="Para alterar sua senha, digite seu e-mail:"/>

            <div className="divInputs">
                <input className="inputEmail" type="text" placeholder="Email"/>
            </div>

            <BotaoVerdeG text='ENVIAR'/>

        </div>
    </main>
    );
}

export default TrocarSenha;