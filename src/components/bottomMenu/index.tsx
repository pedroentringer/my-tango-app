import { useContext } from 'react';

import { 
  Container,
  SafeArea
} from './styles'

import { PrimaryButton, IconButton } from '../../components/buttons'

import { ThemeContext } from '../../providers/theme';
import { LanguageContext } from '../../providers/language';

const BottomMenu = () => {
  const { isDarkTheme, handleTheme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(LanguageContext)

  const handleLanguage = () => {
    if(language === 'en') return setLanguage('pt')
    if(language === 'pt') return setLanguage('fr')
    if(language === 'fr') return setLanguage('en')
  }

  return (
    <>
      <Container>
        <PrimaryButton icon='bar-chart' title='Dashboard'/>
        <IconButton icon={isDarkTheme ? 'lightbulb-outline' : 'lightbulb'} onPress={handleTheme}/>
        <IconButton icon='language' onPress={handleLanguage}/>
      </Container>
      <SafeArea />
    </>
  )

}

export default BottomMenu;
