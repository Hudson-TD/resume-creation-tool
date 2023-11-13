import formStyling from "../styling/Form.module.css";
import Input from "./Input";

function GeneralForm({ layout, formData, onChange }) {
  return (
    <div className={formStyling["form-container"]}>
      <h1>General Information</h1>
      <form className={formStyling["form-el"]}>
        {layout.map((formEl) => {
          return (
            <Input
              formContent={formEl}
              key={formEl.id}
              onChange={onChange}
              formData={formData[formEl.name]}
            />
          );
        })}
      </form>
    </div>
  );
}

export default GeneralForm;
