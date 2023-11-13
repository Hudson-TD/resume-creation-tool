import Input from "./Input";

function GeneralForm({ layout }) {
  return (
    <div className="form-container">
      <h1>General Information</h1>
      <form>
        {layout.map((formEl) => {
          return <Input formContent={formEl} key={formEl.id} />;
        })}
      </form>
    </div>
  );
}

export default GeneralForm;
