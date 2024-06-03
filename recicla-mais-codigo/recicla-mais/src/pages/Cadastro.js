import './TemplateSPA.css';
import './Cadastro.css';
import BoxTitulo from '../components/textBox/BoxTitulo';
import { IMaskInput } from 'react-imask';
import BotaoVerdeG from '../components/buttons/BotaoVerdeG';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome_completo: '',
        data_nascimento: '',
        numero_telefone: '',
        numero_cpf: '',
        rua: '',
        numero_casa: '',
        bairro: '',
        numero_cep: '',
        username: '',
        email: '',
        password: '',
        check_password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
    
        // Validação para o campo de data de nascimento.
        if (name === 'data_nascimento') {
            const [day, month, year] = value.split('/');
    
            // Verifica se o dia está entre 1 e 31, o mês entre 1 e 12, e o ano entre 1900 e 215
            if (Number(day) > 31 || Number(month) > 12 || Number(year) < 1900 || Number(year) > 2015) {
                // Data inválida, não atualiza o estado
                newValue = formData.data_nascimento; // Mantém o valor atual
                setErrors({ ...errors, data_nascimento: 'Data de nascimento inválida' }); // Exibe mensagem de erro
            } else {
                setErrors({ ...errors, data_nascimento: null }); // Remove mensagem de erro
            }
        }
    
        setFormData({ ...formData, [name]: newValue });
    };

    const validate = () => {
        const newErrors = {};
        // validações de campo.
        if (!formData.nome_completo) newErrors.nome_completo = 'Nome completo é obrigatório';
        if (!formData.data_nascimento) newErrors.data_nascimento = 'Data de nascimento é obrigatória';
        if (!formData.numero_telefone) newErrors.numero_telefone = 'Número de telefone é obrigatório';
        if (!formData.numero_cpf) newErrors.numero_cpf = 'CPF é obrigatório';
        if (!formData.rua) newErrors.rua = 'Nome da rua é obrigatório';
        if (!formData.numero_casa) newErrors.numero_casa = 'Número da residência é obrigatório';
        if (!formData.bairro) newErrors.bairro = 'Nome do bairro é obrigatório';
        if (!formData.numero_cep) newErrors.numero_cep = 'CEP é obrigatório';
        if (!formData.username) newErrors.username = 'Nome de usuário é obrigatório';
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        if (!formData.password) newErrors.password = 'Senha é obrigatória';
        if (formData.password !== formData.check_password) newErrors.check_password = 'As senhas não coincidem';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Usuário salvo com sucesso!');
            setTimeout(() => {
                navigate("/Login");
            }, 3000);
            setFormData({
                nome_completo: '',
                data_nascimento: '',
                numero_telefone: '',
                numero_cpf: '',
                rua: '',
                numero_casa: '',
                bairro: '',
                numero_cep: '',
                username: '',
                email: '',
                password: '',
                check_password: ''
            });
        }
    };

    return (
        <main>
            <div className='titulo'>
                <BoxTitulo text='CADASTRO' />
            </div>
            <div className='containerFormulario'>
                <form onSubmit={handleSubmit}>
                    <section className='col_1'>
                        <p className="campoFormulario">
                            <label htmlFor='nome_completo'>
                                <span>Nome completo:</span>
                                <input
                                    type='text'
                                    id='nome_completo'
                                    name='nome_completo'
                                    value={formData.nome_completo}
                                    onChange={handleChange}
                                />
                                {errors.nome_completo && <span className="error">{errors.nome_completo}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='data_nascimento'>
                                <span>Data de Nascimento:</span>
                                <InputMask
                                    mask="99/99/9999"
                                    placeholder="DD/MM/AAAA"
                                    id='data_nascimento'
                                    name='data_nascimento'
                                    value={formData.data_nascimento}
                                    onChange={handleChange}
                                />
                                {errors.data_nascimento && <span className="error">{errors.data_nascimento}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='numero_telefone'>
                                <span>Número de telefone:</span>
                                <IMaskInput
                                    mask='(00) 00000-0000'
                                    placeholder='Informe o seu telefone'
                                    name='numero_telefone'
                                    id='numero_telefone'
                                    value={formData.numero_telefone}
                                    onAccept={(value) => setFormData({ ...formData, numero_telefone: value })}
                                />
                                {errors.numero_telefone && <span className="error">{errors.numero_telefone}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='numero_cpf'>
                                <span>CPF:</span>
                                <IMaskInput
                                    mask='000.000.000-00'
                                    placeholder='Informe o seu CPF'
                                    name='numero_cpf'
                                    id='numero_cpf'
                                    value={formData.numero_cpf}
                                    onAccept={(value) => setFormData({ ...formData, numero_cpf: value })}
                                />
                                {errors.numero_cpf && <span className="error">{errors.numero_cpf}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='rua'>
                                <span>Rua:</span>
                                <input
                                    type='text'
                                    id='rua'
                                    name='rua'
                                    maxLength={40}
                                    value={formData.rua}
                                    onChange={handleChange}
                                />
                                {errors.rua && <span className="error">{errors.rua}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='numero_casa'>
                                <span>Número:</span>
                                <input
                                    type='number'
                                    id='numero_casa'
                                    name='numero_casa'
                                    maxLength={6}
                                    value={formData.numero_casa}
                                    onChange={handleChange}
                                />
                                {errors.numero_casa && <span className="error">{errors.numero_casa}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='bairro'>
                                <span>Bairro:</span>
                                <input
                                    type='text'
                                    id='bairro'
                                    name='bairro'
                                    maxLength={40}
                                    value={formData.bairro}
                                    onChange={handleChange}
                                />
                                {errors.bairro && <span className="error">{errors.bairro}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='numero_cep'>
                                <span>CEP:</span>
                                <IMaskInput
                                    mask='00000-000'
                                    placeholder='Informe o seu CEP'
                                    name='numero_cep'
                                    id='numero_cep'
                                    value={formData.numero_cep}
                                    onAccept={(value) => setFormData({ ...formData, numero_cep: value })}
                                />
                                {errors.numero_cep && <span className="error">{errors.numero_cep}</span>}
                            </label>
                        </p>
                    </section>
                    <section className='col_2'>
                        <p className="campoFormulario">
                            <label htmlFor='username'>
                                <span>Nome de usuário:</span>
                                <input
                                    type='text'
                                    id='username'
                                    name='username'
                                    maxLength={12}
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span className="error">{errors.username}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='email'>
                                <span>Email:</span>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    maxLength={40}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='password'>
                                <span>Senha:</span>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    maxLength={20}
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </label>
                        </p>
                        <p className="campoFormulario">
                            <label htmlFor='check_password'>
                                <span>Confirmar senha:</span>
                                <input
                                    type='password'
                                    id='check_password'
                                    name='check_password'
                                    maxLength={20}
                                    value={formData.check_password}
                                    onChange={handleChange}
                                />
                                {errors.check_password && <span className="error">{errors.check_password}</span>}
                            </label>
                        </p>
                        <BotaoVerdeG texto='Salvar' />
                    </section>
                </form>
            </div>
        </main>
    );
}

export default Cadastro;
