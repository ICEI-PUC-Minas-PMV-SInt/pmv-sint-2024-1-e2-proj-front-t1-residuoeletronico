import "./Navbar.css";
import Logo from "../../imgs/logo-reciclamais.png";
import ImagemUsuario from "../../imgs/imagem-usuario.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Navbar() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === '1';

    if (isLoggedIn) {
      navigate('/Perfil'); // Redireciona para a tela de perfil se o usuário estiver logado.
    } else {
      navigate('/Login'); // Redireciona para a tela de login se o usuário não estiver logado.
    }
  };

  const handleAgendamentoClick = () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === '1';
    if (isLoggedIn) {
      navigate('/Agendamento');
    } else {
      navigate('/Login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to='/'><img src={Logo} className="logo" alt="ReciclaMais" id="logo" /></Link>
      </div>
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/Noticias">Notícias</Link>
        <a href="#" onClick={handleAgendamentoClick}>Agendamento</a>
      </div>
      <div className="navbar_usuario">
        <img 
          src={ImagemUsuario} 
          alt="imagem-usuario" 
          id="imagem_usuario" 
          onClick={handleUserClick} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </nav>
  );
}

export default Navbar;
