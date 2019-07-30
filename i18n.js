const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "ar-kw",
  otherLanguages: ["ar", "en", "en-kw", "en-eg", "ar-eg"],
  // enabling fallback language will break the functionality of checking current language on server
  // https://github.com/isaachinman/next-i18next/issues/428
  // fallbackLng: {
  //   "ar-kw": ["ar"],
  //   "en-kw": ["en"],
  //   "en-eg": ["en"],
  //   "ar-eg": ["ar"]
  // },
  whitelist: ["ar", "en", "en-kw", "en-eg", "ar-eg"],
  lowerCaseLng: true,
  localeSubpaths: "all",
  debug: true
});
