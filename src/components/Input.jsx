function Input({ formContent, onChange }) {
  return (
    <div>
      <label className="form-label">{formContent.label}</label>
      <input type={formContent.type} onChange={onChange}></input>
    </div>
  );
}

export default Input;
