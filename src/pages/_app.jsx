import "@/src/styles/tailwind.css";
import "@/src/styles/index.css"; // Tailwind CSS base styles

import { useEffect } from "react";
// Fix the import to use default export
import ContextProvider from "../context/ContextProvider";
import { LanguageProvider } from "../components/context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ContextProvider>
  );
}
