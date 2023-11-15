function Input({ formContent, formData, onChange }) {
  if (formContent.name === "graduationDate") {
    return (
      <div className="form-control">
        <label className="form-label">
          {formContent.label}
          <span
            style={{
              width: "5px",
              height: "10px",
              paddingLeft: "20px",
              fontWeight: "bold",
              color: "#0d6efd",
            }}
            data-toggle="tooltip"
            data-placement="top"
            title="If you are currently working towards your degree please enter the expected graduation date."
          >
            ?
          </span>
        </label>
        <input
          className="form-control"
          name={formContent.name}
          id={formContent.name}
          type={formContent.type}
          value={formData}
          onChange={onChange}
        ></input>
      </div>
    );
  } else {
    return (
      <div className="form-control">
        <label className="form-label">{formContent.label}</label>
        <input
          className="form-control"
          name={formContent.name}
          id={formContent.name}
          type={formContent.type}
          value={formData}
          onChange={onChange}
        ></input>
      </div>
    );
  }
}

export default Input;
