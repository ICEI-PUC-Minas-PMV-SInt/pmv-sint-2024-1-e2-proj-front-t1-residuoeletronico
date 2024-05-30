import "./TemplateSPA.css";
import "./Login.css";
import { Link } from "react-router-dom";
import BoxTitulo from "../components/textBox/BoxTitulo";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const { username, password } = formData;
    const user = users.find(user => user.username == username && user.password == password);
    console.log(user)

    if (user) {
      localStorage.setItem('loggedIn', '1'); // Define a chave 'loggedIn' como '1' para indicar que o usuário está logado
      localStorage.setItem('currentUser', JSON.stringify(user)); // Armazena os dados do usuário atual para uso posterior
      navigate('/'); // Redireciona para a página de home
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <main className="mainLogin">
      <div className="boxLogin">
        <BoxTitulo text="LOGIN" />


        <div className="divInputs">
          <input onChange={handleChange} id="login" value={formData.username} name="username" className="inputEmail" type="text" placeholder="Nome de Usuário" />

          <input onChange={handleChange} id="password" value={formData.password} name="password" className="inputSenha" type="password" placeholder="Senha" />
        </div>
        {error && <div>{error}</div>}
        <BotaoVerdeG texto='ENTRAR' eventoOnClick={handleLogin} />

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
