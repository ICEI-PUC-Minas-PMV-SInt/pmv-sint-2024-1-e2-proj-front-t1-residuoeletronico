import './TabelaAzul.css'
import React from 'react';
import PropTypes from 'prop-types';

function TabelaAzul({ headersTabela, corpoTabela = [] }) {
    return (
        <table className='tabelaAzul'>
            <thead>
                <tr>
                    {headersTabela.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {corpoTabela}
            </tbody>
        </table>
    );
}

TabelaAzul.propTypes = {
    headersTabela: PropTypes.arrayOf(PropTypes.string).isRequired,
    corpoTabela: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired
};

export default TabelaAzul;
