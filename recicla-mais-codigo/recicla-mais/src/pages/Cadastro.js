import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import './TemplateSPA.css'
import './Cadastro.css'
import {IMaskInput} from 'react-imask'


function Cadastro(){
    return (
       
            <main>
                <div className='titulo'>
                    <BoxTitulo text='CADASTRO'/>
                </div>
                <div className='container_form'>
                    <form>
                        <section className='col_1'>
                            <p className="campoFormulario">
                                <label htmlFor='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='text' id='nome_completo' name='nomecompleto'/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='dataNascimento'>
                                    <span>Data de Nascimento:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='date' id='data_nascimento' name='dataNascimento'/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='numeroTelefone'>
                                    <span>Número de telefone:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <IMaskInput
                                        mask='(00) 00000-0000'
                                        placeholder='Informe o seu telefone'
                                        name='numeroTelefone'
                                        id='numero_telefone'/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='numeroCpf'>
                                    <span>CPF:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <IMaskInput
                                        mask='000.000.000-00'
                                        placeholder='Informe o seu CPF'
                                        name='numeroCpf'
                                        id='numero_cpf'/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='endereco_usuario'>
                                    <span>Endereço:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='text' id='endereco' name='endereco_usuario' maxLength={40}/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='numeroCep'>
                                    <span>CEP:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <IMaskInput
                                        mask='00000-000'
                                        placeholder='Informe o seu CEP'
                                        name='numeroCep'
                                        id='numero_cep'/>
                                </label>
                            </p>
                        </section>
                        <section className='col_2'>
                            <p className="campoFormulario">
                                <label htmlFor='login_usuario'>
                                    <span>Login:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='text' id='login' name='login_usuario' maxLength={12}/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='email_usuario'>
                                    <span>Email:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='email' id='email' name='email_usuario' maxLength={25}/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='password_usuario'>
                                    <span>Senha:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='password' id='password' name='password_usuario' maxLength={20}/>
                                </label>
                            </p>
                            <p className="campoFormulario">
                                <label htmlFor='confirmar_password_usuario'>
                                    <span>Confirmar senha:</span>
                                    <strong>*</strong>
                                    <br/>
                                    <input type='password' id='check_password' name='confirmar_password_usuario' maxLength={20}/>
                                </label>
                            </p>
                            <div className='container_btn_submit'>
                                <button type='submit'>SALVAR</button>
                            </div>
                        </section>
                    </form>
                </div>
            </main>
            
    )
}

export default Cadastro