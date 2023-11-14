function Select({ formContent, onChange }) {
  return (
    <div className={"form-control"}>
      <label className={"form-label"}>{formContent.label}</label>
      <select
        className={"form-select"}
        name={formContent.name}
        onChange={onChange}
        defaultValue={formContent.options[0]}
      >
        {formContent.options.map((option) => {
          if (option === "null") {
            return (
              <option key={option} disabled value={option}>
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
    </div>
  );
}

export default Select;
