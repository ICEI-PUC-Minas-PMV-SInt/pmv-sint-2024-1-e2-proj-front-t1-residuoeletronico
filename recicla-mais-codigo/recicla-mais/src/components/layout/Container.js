import './Container.css'

function Container(props){
    return (<div className={`containerGeral ${props.customClass}`}>{props.children}</div>)
}

export default Container