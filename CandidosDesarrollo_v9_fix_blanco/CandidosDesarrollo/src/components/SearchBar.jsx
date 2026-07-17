function SearchBar({ value, onChange, placeholder = "Buscar productos..." }) {
  return (
    <input
      className="buscador"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
