import { I18nResolver } from 'i18n-ts'

import en from './en'
import pt from './pt'
import fr from './fr'

const translations = {
  'en': en,
  'pt': pt,
  'fr': fr,
  default: en
}

export const translate = (key: string = 'en') => new I18nResolver(translations, key).translation