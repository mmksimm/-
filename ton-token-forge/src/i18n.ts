import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: {
      title: 'TON Token Forge',
      connectWallet: 'Connect Wallet',
      tokenName: 'Token Name',
      ticker: 'Ticker',
      supply: 'Total Supply',
      createToken: 'Create Token',
      inviteFriends: 'Invite friends',
    },
  },
  ru: {
    translation: {
      title: 'TON Token Forge',
      connectWallet: 'Подключить кошелек',
      tokenName: 'Название токена',
      ticker: 'Тикер',
      supply: 'Общий выпуск',
      createToken: 'Создать токен',
      inviteFriends: 'Пригласить друзей',
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
