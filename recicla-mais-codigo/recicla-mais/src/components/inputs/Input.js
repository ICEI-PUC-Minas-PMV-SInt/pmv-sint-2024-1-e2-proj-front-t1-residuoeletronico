function Input({
  classeCSS,
  labelFor,
  type,
  name,
  placeholder,
  id,
  eventoOnChange,
}) {
  return (
    <label className={classeCSS} for={labelFor}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={eventoOnChange}
      />
    </label>
  );
}

export default Input;
