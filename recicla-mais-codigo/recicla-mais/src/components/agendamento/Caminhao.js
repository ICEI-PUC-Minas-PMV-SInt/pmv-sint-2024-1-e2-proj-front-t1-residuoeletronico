import './Caminhao.css'
import CaminhaoImg from '../../imgs/caminhao-de-carga.png'
import Linha from '../../imgs/linha-agendamento.png'

function Caminhao(props) {
    return (
        <div className='divImagens'>
            <div className={props.classeCSS}>
                <img src={CaminhaoImg} alt='caminhao' id='caminhao'/>
            </div>
            
            <img src={Linha} alt='linha' />
        </div>
    )
}

export default Caminhao