import 'styled-components'
import {darkTheme, lightTheme} from './theme'

declare module 'styled-components' {
  type ThemeType = typeof darkTheme & typeof lightTheme

  export interface DefaultTheme extends ThemeType { }
}