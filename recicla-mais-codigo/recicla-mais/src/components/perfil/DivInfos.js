import './DivInfos.css';

function DivInfos({dados}){
    return (<div className='divInfos'>
        <p>Nome: {dados.nome_completo}</p>
        <p>CPF: {dados.numero_cpf}</p>
        <p>Data de Nascimento: {dados.data_nascimento}</p>
        <p>Endereço: {dados.rua}, {dados.numero_casa}, Bairro {dados.bairro} - {dados.numero_cep}</p>
    </div>)
}

export default DivInfos