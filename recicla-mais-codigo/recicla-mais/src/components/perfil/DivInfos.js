import './DivInfos.css';

function DivInfos({dados}){
    return (<div className='divInfos'>
        <p>Nome: {dados.nome_completo}</p>
        <p>CPF: {dados.numero_cpf}</p>
        <p>Data de Nascimento: {dados.data_nascimento}</p>
        <p>Endereço: {dados.endereco}</p>
    </div>)
}

export default DivInfos