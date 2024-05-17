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
  const [errorMessage, setErrorMessage] = useState('');

  const dados = {
    nome: 'Ana',
    senha: '1234'
  }

  localStorage.setItem('dados', JSON.stringify(dados));

  const change = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const setEmailAndPassword = () => {
    const storedData = JSON.parse(localStorage.getItem('dados'));

    if (loginData.username === storedData.nome && loginData.password === storedData.senha) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/");
    } else {
      setErrorMessage('Você ainda não possui cadastro');
    }
  };

  return (
    <main className="mainLogin">
      <div className="boxLogin">
        <BoxTitulo text="LOGIN" />

        <div className="divInputs">
          <input onChange={change} id="username" className="inputEmail" type="text" placeholder="Email" />

          <input onChange={change} id="password" className="inputSenha" type="text" placeholder="Senha" />
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}

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
