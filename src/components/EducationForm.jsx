import formStyling from "../styling/Form.module.css";
import Input from "./Input";
import Select from "./Select";

function EducationForm({ layout, formData, formList, onChange, onSave }) {
  return (
    <div className={formStyling["form-container"]}>
      <h1>Education Information</h1>
      <form className={formStyling["form-el"]}>
        {layout.map((formEl) => {
          if (formEl.fieldTag === "Input") {
            return (
              <Input
                formContent={formEl}
                key={formEl.id}
                name={formEl.name}
                formData={formData[layout.name]}
                onChange={onChange}
              />
            );
          } else if (formEl.fieldTag === "Select") {
            return (
              <Select
                formContent={formEl}
                key={formEl.id}
                name={formEl.name}
                formData={formData[layout.name]}
                onChange={onChange}
              />
            );
          }
        })}

        <button onClick={onSave}>Save Entry</button>
      </form>

      {/* visual reference of state data on user input - remove later */}
      <h1>Current State Data for Education Form:</h1>
      {formList.map((entry, index) => {
        return (
          <div key={index}>
            <p>{entry.institute}</p>
            <p>{entry.educationLevel}</p>
            <p>{entry.major}</p>
            <p>{entry.startDate}</p>
            <p>{entry.graduationDate}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationForm;
