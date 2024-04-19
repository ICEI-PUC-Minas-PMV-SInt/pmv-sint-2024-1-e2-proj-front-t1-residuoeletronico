import './TemplateSPA.css';
import './Login.css';
import { Link } from 'react-router-dom';


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
                    <button className='botao3'><Link to='/Agendamento'>Entrar</Link></button>
               </div>
               <div className="link">
                    <h1><Link to='/Cadastro'>Ainda nao possuo uma conta</Link></h1>
                    <br></br>
                    <h1><Link to='/'>Esqueci minha senha</Link></h1>
                </div>
            </main>
    )
}

export default Login