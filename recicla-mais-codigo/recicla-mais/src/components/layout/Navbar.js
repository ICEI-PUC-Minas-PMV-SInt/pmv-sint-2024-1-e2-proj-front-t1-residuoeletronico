import "./Navbar.css";
import Logo from "../../imgs/logo-reciclamais.png";
import ImagemUsuario from "../../imgs/imagem-usuario.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="">
        <img src={Logo} alt="ReciclaMais" id="logo" />
      </a>
      <div className="navbar_links">
        <a href="">
          <h2>Home</h2>
        </a>
        <a href="">
          <h2>Notícias</h2>
        </a>
        <a href="">
          <h2>Agendamento</h2>
        </a>
      </div>
      <a href="">
        <img src={ImagemUsuario} alt="imagem-usuario" id="imagem_usuario"/>
      </a>
    </nav>
  );
}

export default Navbar;
