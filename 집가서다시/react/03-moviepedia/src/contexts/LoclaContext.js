import { createContext, useContext, useState } from "react";

// Context 가 제공할 기본값을 받는다.
const LoacleContext = createContext();

export function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LoacleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LoacleContext.Provider>
  );
}

// 매번 useContext 아 LocalContext 값을 가지고 사용하는 것이 번거롭기 때문에
// 이거들을 대신할 수  있는 커스텀 hook 을 만든다
// useLocae Hook은 locale 값을 전달해주고 useSetLocale 이라는 Hook은
// setLocale 함수를 전달해주도록 한다.
export function useLocale() {
  const context = useContext(LoacleContext);
  if (!context) {
    throw new Error("qksemtl LcaleProvider dksdptjtkdydgodigkslek");
  }

  return context.locale;
}
export function useSetLocale() {
  const context = useContext(LoacleContext);
  if (!context) {
    throw new Error("qksemtl LcaleProvider dksdptjtkdydgodigkslek");
  }

  return context.setLocale;
}
