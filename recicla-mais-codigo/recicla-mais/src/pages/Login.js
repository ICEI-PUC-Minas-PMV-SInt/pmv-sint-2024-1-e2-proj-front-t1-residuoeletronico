// Essa é a página de template, antes de usar duplique ela mantendo a original e renomeie para o nome da sua página. Não esqueça de mudar o nome da função e do export. Crie também um CSS único para sua página dentro da pasta "pages". As rotas estão sendo definidas no arquivo App.js. Basta criar um novo Route com o path da página e associar o componente ao element.

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import './TemplateSPA.css';
import './Login.css';


function Login() {
    return (
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main>
               <div className='box_title'>
                    <h1>LOGIN</h1>                
               </div>

               <div className='email'>
                    <input className='botao1' type='text' placeholder='Email'/>
                    <br></br>
                    <input className='botao2' type='text' placeholder='Senha'/>
                    <button className='botao3'><a href={'./src/pages/Agendamento.js'}>Entrar</a></button>
               </div>
               <div class="link">
                    <h1><a href="./src/pages/Cadastro.js">Ainda nao possuo uma conta</a></h1>
                    <br></br>
                    <h1><a href="./src/pages/Cadastro.js">Esqueci minha senha</a></h1>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Login