import styles from "../styling/Input.module.css";

function Input({ formContent, formData, onChange }) {
  return (
    <>
      <label className={styles["form-label"]}>{formContent.label}</label>
      <input
        className={styles["form-input"]}
        name={formContent.name}
        type={formContent.type}
        value={formData}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;
