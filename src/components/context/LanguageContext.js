import en from "../../locales/en";
import zh from "../../locales/zh";
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("zh"); // 默认中文
  const toggleLang = () => setLang((prev) => (prev === "zh" ? "en" : "zh"));
  // 提供当前语言和对应 locale
  const locale = lang === "zh" ? zh : en;
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
