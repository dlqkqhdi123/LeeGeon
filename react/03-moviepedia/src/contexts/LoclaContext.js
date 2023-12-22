import { createContext, useState } from "react";

// Context 가 제공할 기본값을 받는다.
const LoacleContext = createContext();

function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LoacleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LoacleContext.Provider>
  );
}
function useLocale() {}
export default LocaleProvider;
