// CelulaTroca.js
import React from 'react';
import './CelulaTroca.css';

const CelulaTroca = ({ trocas }) => {
    return (
        <>
            {trocas.map((troca, index) => (
                <tr key={index}>
                    <td>{troca.data}</td>
                    <td>{troca.valor}</td>
                    <td className="pontosResgatados">{troca.pontosResgatados}</td>
                </tr>
            ))}
        </>
    );
};

export default CelulaTroca;
