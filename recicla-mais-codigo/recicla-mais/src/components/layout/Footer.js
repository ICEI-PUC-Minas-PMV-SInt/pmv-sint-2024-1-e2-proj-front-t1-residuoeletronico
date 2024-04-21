import "./Footer.css";
import PBH from "../../imgs/PrefeituraBH.png";
import Instagram from "../../imgs/instagram.png";
import xIcon from "../../imgs/x.png";
import YouTube from "../../imgs/youtube.png";
import FaleConosco from "../../imgs/fale-conosco.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container_footer">
      <img src={PBH} alt="PrefeituraBH" id='pbh'/>
      <div className="container_icones">
        <div className="icones">
          <Link to=''>
            <img src={Instagram} alt="instagram" />
          </Link>
          <Link to=''>
            <img src={xIcon} alt="x" />
          </Link>
          <Link to=''>
            <img src={YouTube} alt="youtube" />
          </Link>
        </div>
        <span>
          <p id='copyright'>Copyright &copy;2023 ReciclaMais</p>
        </span>
      </div>
      <Link to=''><img src={FaleConosco} alt='fale-conosco' id='fale_conosco'/></Link>
    </footer>
  );
}

export default Footer;
