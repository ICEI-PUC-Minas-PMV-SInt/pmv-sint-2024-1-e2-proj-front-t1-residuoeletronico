// Essa é a página de template, antes de usar duplique ela mantendo a original e renomeie para o nome da sua página. Não esqueça de mudar o nome da função e do export. Crie também um CSS único para sua página dentro da pasta "pages". As rotas estão sendo definidas no arquivo App.js. Basta criar um novo Route com o path da página e associar o componente ao element.

import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import './TemplateSPA.css'

function TemplateSPA(){
    return (
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main>
                {/* sua página vai aqui */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default TemplateSPA