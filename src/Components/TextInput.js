function TextInput({ type = "text", label, value, onChange }) {
  return (
    <div className="input-container">
      <input type={type} value={value} onChange={onChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}
export default TextInput;
