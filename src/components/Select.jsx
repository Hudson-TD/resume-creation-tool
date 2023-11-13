import formStyling from "../styling/Form.module.css";

function Select({ formContent, onChange }) {
  return (
    <>
      <label className={formStyling["form-label"]}>{formContent.label}</label>
      <select
        className={formStyling["form-select"]}
        name={formContent.name}
        onChange={onChange}
      >
        {formContent.options.map((option) => {
          if (option === "null") {
            return (
              <option key={option} disabled selected value={option}>
                -- select an option --
              </option>
            );
          }
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
