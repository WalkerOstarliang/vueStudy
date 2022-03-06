import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'
const messages = {
  zh: {
    ...ZH
  },
  en: {
    ...EN
  }

}

const getCurrentLanguage = () => {
  const UAlang = navigator.language // zh-CN
  console.log(UAlang)
  const langCode = UAlang.indexOf('zh-CN') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  local: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n
