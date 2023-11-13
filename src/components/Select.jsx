import formStyling from "../styling/Form.module.css";

function Select({ formContent, formData, onChange }) {
  return (
    <>
      <label className={formStyling["form-label"]}>{formContent.label}</label>
      <select className={formStyling["form-select"]}>
        {formContent.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
