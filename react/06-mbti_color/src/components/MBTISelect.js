import styles from "./MBTISelect.module.css";

const optionGroups = [
  [
    { value: "E", label: "외향형" },
    { value: "I", label: "내향형" },
  ],
  [
    { value: "S", label: "감각형" },
    { value: "N", label: "직관형" },
  ],
  [
    { value: "T", label: "사고형" },
    { value: "F", label: "감정형" },
  ],
  [
    { value: "J", label: "판단형" },
    { value: "P", label: "인식형" },
  ],
];

function MBTIOption({ value, label, onClick, selected }) {
  const classNames = `${styles.mbtiOption} ${selected ? styles.selected : ""}`;
  return (
    <div className={classNames} onClick={onClick}>
      <span className={styles.char}>{value}</span>
      {label}
    </div>
  );
}

function MBTIOptionGroup({ options, onChange, value }) {
  return (
    <div className={styles.mbtiOptionGroup}>
      {options.map((option) => (
        <MBTIOption
          key={option.value}
          label={option.label}
          selected={option.value === value}
          value={option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}

export default function MBTISelect({ value = "ESFP", onChange }) {
  const handleChangeAt = (val, position) => {
    const nextValue =
      value.slice(0, position) + val + value.slice(position + 1);
    onChange(nextValue);
  };
  return (
    <div>
      {optionGroups.map((options, index) => (
        <MBTIOptionGroup
          key={`${options[0].value}-${options[1].value}`}
          options={options}
          value={value[index]}
          onChange={(val) => handleChangeAt(val, index)}
        />
      ))}
    </div>
  );
}
