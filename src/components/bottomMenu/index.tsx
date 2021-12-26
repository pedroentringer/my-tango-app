import { useContext, useState } from 'react';

import { 
  Container,
  SafeArea,
  ContainerSubMenu
} from './styles'

import { PrimaryButton, IconButton, DefaultButton } from '../../components/buttons'

import { ThemeContext } from '../../providers/theme';
import { LanguageContext } from '../../providers/language';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

const BottomMenu = (props:any) => {
  const { isDarkTheme, handleTheme } = useContext(ThemeContext)
  const { setLanguage } = useContext(LanguageContext)

  const subMenuLanguage = useAnimationState({
    closed: {
      translateY: 120,
      opacity: 0
    },
    open: {
        translateY: 0,
        opacity: 1
    },
  })

  subMenuLanguage.transitionTo('closed')

  const handleLanguage = () => {
    const currentState = subMenuLanguage.current

    if(currentState !== 'open') {
      return subMenuLanguage.transitionTo('open')
    }

    subMenuLanguage.transitionTo('closed')
  }

  const renderSubMenuLanguage = () => {
    return (
      <ContainerSubMenu state={subMenuLanguage} transition={{
        type: 'timing',
        duration: 500,
      }}>
        <DefaultButton title='Português' onPress={() => setLanguage('pt')}/>
        <DefaultButton title='English' onPress={() => setLanguage('en')}/>
        <DefaultButton title='français' onPress={() => setLanguage('fr')}/>
      </ContainerSubMenu>
    )
  }
  return (
    <>
      <AnimatePresence>
        {
          renderSubMenuLanguage()
        }
      </AnimatePresence>
      <MotiView {...props}>
        <Container>
          <PrimaryButton icon='bar-chart' title='Dashboard'/>
          <IconButton icon={isDarkTheme ? 'lightbulb-outline' : 'lightbulb'} onPress={handleTheme}/>
          <IconButton icon='language' onPress={handleLanguage}/>
        </Container>
        <SafeArea />
      </MotiView>
    </>
  )

}

export default BottomMenu;
