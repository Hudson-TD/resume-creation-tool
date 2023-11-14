import formStyling from "../styling/Form.module.css";
import Input from "./Input";
import Select from "./Select";

function EducationForm({ layout, formData, dataList, onChange, onSave }) {
  const maxEntries = 3;

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
                onChange={onChange}
                formData={formData[layout.name]}
              />
            );
          } else if (formEl.fieldTag === "Select") {
            return (
              <Select
                formContent={formEl}
                key={formEl.id}
                formData={formData[layout.name]}
                onChange={onChange}
              />
            );
          }
        })}

        <button
          disabled={dataList.length === maxEntries ? true : false}
          onClick={onSave}
        >
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default EducationForm;
