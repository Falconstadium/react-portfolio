export const langList = {
  en: "EN",
  fr: "FR",
  ar: "ع",
};

export function getLang() {
  const langKeys = Object.keys(langList);
  for (let i = 0; i < langKeys.length; i++) {
    if (window.location.href.includes(langKeys[i])) {
      langKeys[i] === "ar" ? (document.body.dir = "rtl") : null;
      return langKeys[i];
    }
  }

  window.location.href = "en";
}
