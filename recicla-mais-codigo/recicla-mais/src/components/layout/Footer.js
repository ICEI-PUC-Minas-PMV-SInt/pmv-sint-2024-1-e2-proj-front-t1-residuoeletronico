import "./Footer.css";
import PBH from "../../imgs/PrefeituraBH.png";
import Instagram from "../../imgs/instagram.png";
import xIcon from "../../imgs/x.png";
import YouTube from "../../imgs/youtube.png";
import FaleConosco from "../../imgs/fale-conosco.png"

function Footer() {
  return (
    <div className="container_footer">
      <img src={PBH} alt="PrefeituraBH" id='pbh'/>
      <div className="container_icones">
        <div className="icones">
          <a href="">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={xIcon} alt="x" />
          </a>
          <a href="">
            <img src={YouTube} alt="youtube" />
          </a>
        </div>
        <span>
          <p id='copyright'>Copyright &copy;2023 ReciclaMais</p>
        </span>
      </div>
      <a href=''><img src={FaleConosco} alt='fale-conosco' id='fale_conosco'/></a>
    </div>
  );
}

export default Footer;
