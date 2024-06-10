import './BoxEndereco.css';
import { useEffect, useState } from 'react';

function BoxEndereco() {
  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (currentUser.rua && currentUser.numero_casa && currentUser.bairro && currentUser.numero_cep) {
      setEndereco({
        rua: currentUser.rua,
        numero_casa: currentUser.numero_casa,
        bairro: currentUser.bairro,
        cidade: currentUser.cidade || 'Belo Horizonte',
        estado: currentUser.estado || 'MG',
        numero_cep: currentUser.numero_cep,
      });
    }
  }, []);

  return (
    <div className="divEndereco">
      <div className="divEndereco_titulo">
        <h3>Endereço:</h3>
      </div>
      <div className="divEndereco_endereco">
        <p>
          Rua {endereco.rua}, {endereco.numero_casa} - Bairro {endereco.bairro}, {endereco.cidade} - {endereco.estado}, {endereco.numero_cep}
        </p>
      </div>
    </div>
  );
}

export default BoxEndereco;
