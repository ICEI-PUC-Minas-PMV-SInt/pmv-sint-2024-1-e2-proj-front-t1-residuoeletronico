import './BotaoAdd.css'
import AddBotao from '../../imgs/add.png'

function BotaoAdd(props){
    return  (
        <button onClick={props.evento}><img src={AddBotao} alt='adicionar' id='addBotao'/></button>
    )
}

export default BotaoAdd