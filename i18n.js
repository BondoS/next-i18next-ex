const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "ar",
  otherLanguages: ["en"],
  localeSubpaths: "all",
  // debug: true
});