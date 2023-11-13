function Input({ formContent, onChange }) {
  return (
    <>
      <label className="form-label">{formContent.label}</label>
      <input type={formContent.type} onChange={onChange}></input>
    </>
  );
}

export default Input;
