import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  lng:'ar',
  defaultLanguage: 'ar',
  otherLanguages: ['en'],
  defaultNS: 'common',
  localeSubpaths: 'all',
  debug: true
})

export const {
    appWithTranslation,
    withTranslation,
  } = NextI18NextInstance