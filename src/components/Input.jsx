import formStyling from "../styling/Form.module.css";

function Input({ formContent, formData, onChange }) {
  return (
    <>
      <label className={formStyling["form-label"]}>{formContent.label}</label>
      <input
        className={formStyling["form-input"]}
        name={formContent.name}
        type={formContent.type}
        value={formData}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;
