function Seletor({ classeCSS, opcoes, eventoOnChange }) {
  return (
    <select className={classeCSS} onChange={eventoOnChange}>
      {opcoes.map((opcao, index) => (
        <option key={index} value={opcao}>
          {opcao}
        </option>
      ))}
    </select>
  );
}

export default Seletor;
