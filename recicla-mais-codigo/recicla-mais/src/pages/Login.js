import "./TemplateSPA.css";
import "./Login.css";
import { Link } from "react-router-dom";
import BoxTitulo from "../components/textBox/BoxTitulo";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: '', password: '' });

    const change = e => {
    setLoginData((prev) => {
      let helper = {...prev};
      
      helper[`${e.target.id}`] = e.target.value;

      return helper;

    });
  }

  const setEmailAndPassword = () => {
    localStorage.setItem('username', loginData.username);
    localStorage.setItem('password', loginData.password);
    localStorage.setItem('isLoggedIn', 'true');
    /*alert("Você ainda não é cadastrado.")*/

    // Navegar para a outra tela
    navigate("/");

  }


  return (
    <main className="mainLogin">
      <div className="boxLogin">
        <BoxTitulo text="LOGIN" />

        <div className="divInputs">
          <input onChange={change} id="username" className="inputEmail" type="text" placeholder="Email" />

          <input onChange={change} id="password" className="inputSenha" type="text" placeholder="Senha" />
        </div>

        <BotaoVerdeG texto='ENTRAR' eventoOnClick={setEmailAndPassword}/>

        <div className="link">
          <Link to="/Cadastro">
            <h1>Ainda não possuo uma conta</h1>
          </Link>
          <br></br>
          <Link to="/TrocarSenha">
            <h1>Esqueci minha senha</h1>
          </Link>
        </div>
      </div>
    </main>
  );
};


export default Login;
