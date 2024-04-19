import './TemplateSPA.css';
import './Login.css';


function Login() {
    return (
            <main>
               <div className='box_flex'>
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
    )
}

export default Login