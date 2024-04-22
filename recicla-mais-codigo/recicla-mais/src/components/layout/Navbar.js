import "./Navbar.css";
import Logo from "../../imgs/logo-reciclamais.png";
import ImagemUsuario from "../../imgs/imagem-usuario.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to='/'><img src={Logo} className="logo" alt="ReciclaMais" id="logo" />
        </Link>
      </div>
      <div className="navbar_links">
        <Link to="/">
          Home
        </Link>
        <Link to="">
          Notícias
        </Link>
        <Link to='/Agendamento'>
          Agendamento
        </Link>
      </div>
      <div className="navbar_usuario">
        <Link to='/Cadastro'>
          <img src={ImagemUsuario} alt="imagem-usuario" id="imagem_usuario"/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
