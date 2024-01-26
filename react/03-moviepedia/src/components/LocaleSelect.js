import { useLocale, useSetLocale } from "../contexts/LoclaContext";
import "./LocaleSelect.css";

function LocaleSelect() {
  const local = useLocale();
  const handleChange = (e) => setlocale(e.target.value);
  const setlocale = useSetLocale();

  return (
    <select className="LocaleSelect" value={local} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
