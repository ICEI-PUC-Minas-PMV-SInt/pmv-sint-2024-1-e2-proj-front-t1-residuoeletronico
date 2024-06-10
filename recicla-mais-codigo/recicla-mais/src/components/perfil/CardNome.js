import React, { useEffect, useState } from 'react';
import './CardNome.css';
import IconePerfil from '../../imgs/icone_perfil.png';

function CardNome() {
  const [primeiroNome, setprimeiroNome] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (currentUser.nome_completo) {
      const primeiroNome = currentUser.nome_completo.split(' ')[0];
      setprimeiroNome(primeiroNome);
    }
  }, []);

  return (
    <div className="cardNome">
      <img src={IconePerfil} alt="icone_perfil" />
      <h1>{primeiroNome}</h1>
    </div>
  );
}

export default CardNome;