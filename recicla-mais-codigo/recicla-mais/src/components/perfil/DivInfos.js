import './DivInfos.css';

function DivInfos({ dados, isEditing, handleChange, editData }) {
  return (
    <div className='divInfos'>
      <p>
        Nome: {isEditing ? <input type="text" name="nome_completo" value={editData.nome_completo} onChange={handleChange} /> : dados.nome_completo}
      </p>
      <p>
        CPF: {isEditing ? <input type="text" name="numero_cpf" value={editData.numero_cpf} onChange={handleChange} /> : dados.numero_cpf}
      </p>
      <p>
        Data de Nascimento: {isEditing ? <input type="text" name="data_nascimento" value={editData.data_nascimento} onChange={handleChange} /> : dados.data_nascimento}
      </p>
      <p>
        Endereço: {isEditing ? (
          <>
            <input type="text" name="rua" value={editData.rua} onChange={handleChange} placeholder='Rua' />, 
            <input type="text" name="numero_casa" value={editData.numero_casa} onChange={handleChange} placeholder='Número'/>, 
            Bairro <input type="text" name="bairro" value={editData.bairro} onChange={handleChange} placeholder='Bairro'/> - 
            <input type="text" name="numero_cep" value={editData.numero_cep} onChange={handleChange} placeholder='CEP'/>
          </>
        ) : (
          `${dados.rua}, ${dados.numero_casa}, Bairro ${dados.bairro} - ${dados.numero_cep}`
        )}
      </p>
    </div>
  );
}

export default DivInfos;