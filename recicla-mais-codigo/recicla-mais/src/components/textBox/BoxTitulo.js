import "./BoxTitulo.css"

function BoxTitulo(props) {
    return (
        <div className={`boxTitulo ${props.classeCSS}`}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default BoxTitulo