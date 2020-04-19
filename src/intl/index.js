import React from "react"
import { IntlProvider } from "react-intl";

import en from "./en.json"
import fr from "./fr.json"

const messages = {
  en,
  fr
}

// language without region code
const navigatorLanguage = navigator.language.split(/[-_]/)[0];

export default function Intl({ children }) {
  const language = navigatorLanguage in messages ? navigatorLanguage : "en"

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  )
}
