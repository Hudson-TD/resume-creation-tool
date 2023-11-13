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
      {/* visual reference of state data on user input - remove later */}
      <h1>Current State Data for General Form:</h1>
      <p>{formData.firstName}</p>
      <p>{formData.lastName}</p>
      <p>{formData.emailAddress}</p>
      <p>{formData.phoneNumber}</p>
    </div>
  );
}

export default GeneralForm;
