import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import './TemplateSPA.css'
import './Cadastro.css'

function Cadastro(){
    return (
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main>
                <div className='titulo'>
                    <h2>
                        Área de cadastro
                    </h2>
                </div>
                <div className='container_form'>
                    <form>
                        <section className='col_1'>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                        </section>
                        <section className='col_2'>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <p>
                                <label for='nomecompleto'>
                                    <span>Nome completo:</span>
                                    <strong><abb title='Obrigatório'>*</abb></strong>
                                </label>
                                <input type='text' id='nome_completo' name='nomecompleto'/>
                            </p>
                            <div className='container_btn_submit'>
                                <submit>Salvar</submit>
                            </div>
                        </section>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Cadastro