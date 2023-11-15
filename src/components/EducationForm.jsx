import Input from "./Input";
import Select from "./Select";

function EducationForm({ layout, formData, dataList, onChange, onSave }) {
  const maxEntries = 3;

  return (
    <div
      className={
        "w-100 d-flex flex-column justify-content-start align-items-center"
      }
    >
      <h1 className={"py-3"}>Education Information</h1>
      <div className={"w-75"}>
        <form className={"form-group"}>
          {layout.map((formEl) => {
            if (formEl.fieldTag === "Input") {
              return (
                <Input
                  formContent={formEl}
                  key={formEl.id}
                  id={formEl.name}
                  onChange={onChange}
                  formData={formData[layout.name]}
                />
              );
            } else if (formEl.fieldTag === "Select") {
              return (
                <Select
                  formContent={formEl}
                  key={formEl.id}
                  id={formEl.name}
                  formData={formData[layout.name]}
                  onChange={onChange}
                />
              );
            }
          })}
          <div className="d-flex justify-content-center py-3">
            <button
              className="btn btn-success px-5"
              disabled={dataList.length === maxEntries ? true : false}
              onClick={onSave}
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EducationForm;
