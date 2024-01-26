import styles from "./ColorInput.module.css";

export default function ColorInput({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const isValidColorCode = (value) => {
    return /^#[a-fA-F0-9]{6}$/.test(value);
  };

  const handleBlur = () => {
    if (!isValidColorCode(value)) {
      onChange("#000000");
    }
  };

  return (
    <div className={styles.colorInput}>
      <input
        className={styles.input}
        maxLength={7}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValidColorCode(value) && (
        <span className={styles.chip} style={{ backgroundColor: value }}></span>
      )}
    </div>
  );
}
