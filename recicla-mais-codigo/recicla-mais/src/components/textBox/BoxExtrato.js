import "./BoxExtrato.css"

function BoxExtrato(props) {
    return (
        <div className={`boxExtrato ${props.classeCSS}`}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default BoxExtrato