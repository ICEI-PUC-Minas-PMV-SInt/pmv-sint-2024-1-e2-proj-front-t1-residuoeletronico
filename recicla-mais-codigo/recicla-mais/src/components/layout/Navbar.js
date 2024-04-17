import "./Navbar.css";
import Logo from "../../imgs/logo-reciclamais.png";
import ImagemUsuario from "../../imgs/imagem-usuario.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <a href="">
          <img src={Logo} className="logo" alt="ReciclaMais" id="logo" />
        </a>
      </div>
      <div className="navbar_links">
        <a href="">
          Home
        </a>
        <a href="">
          Notícias
        </a>
        <a href="/src/pages/Agendamento.js">
          Agendamento
        </a>
      </div>
      <div className="navbar_usuario">
        <a href="/src/pages/Cadastro.js">
          <img src={ImagemUsuario} alt="imagem-usuario" id="imagem_usuario"/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
