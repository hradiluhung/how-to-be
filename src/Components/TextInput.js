function TextInput({ type = "text", label, value, onChange }) {
  return (
    <div className="input-container">
      <input type={type} value={value} onChange={onChange} required />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}
export default TextInput;
