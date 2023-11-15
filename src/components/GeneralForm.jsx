import Input from "./Input";

function GeneralForm({ layout, formData, onChange, onSectionSave }) {
  return (
    <div
      className={
        "w-100 d-flex flex-column justify-content-center align-items-center"
      }
    >
      <h1 className={"py-3"}>
        General Information{" "}
        <span>
          <button
            type="button"
            className="btn btn-light rounded-right"
            data-toggle="tooltip"
            data-placement="top"
            title="All fields are required (*), unless marked as (optional)"
          >
            ?
          </button>
        </span>
      </h1>
      <div className={"w-50"}>
        <form className={"form-control"} id="generalForm">
          {layout.map((formEl) => {
            return (
              <Input
                formContent={formEl}
                key={formEl.id}
                onChange={onChange}
                formData={formData[formEl.name]}
                id={formEl.name}
              />
            );
          })}
          <div className="d-flex justify-content-center py-3">
            <button
              type="button"
              data-next="Education"
              onClick={onSectionSave}
              className="btn btn-primary px-5"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneralForm;
