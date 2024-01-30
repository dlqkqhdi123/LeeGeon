import { useLocale, useSetLocale } from "../contexts/LocaleContext";
import "./LocaleSelect.css";

function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const handleChange = (e) => setLocale(e.target.value);
  console.log("LocaleSelect 로딩");

  return (
    <select className="LocaleSelect" value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
