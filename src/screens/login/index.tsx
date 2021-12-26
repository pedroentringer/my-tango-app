import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { translate } from '../../locales'

import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Logo,
  PreName,
  Name,
  Buttons,
  LoginButton,
  RegisterButton,
} from './styles'

import { LanguageContext } from '../../providers/language';

export default function Login() {

  const { language } = useContext(LanguageContext)

  const translated = translate(language);

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar style='light' />


      <Logo>
        <PreName>My</PreName>
        <Name>Tango</Name>
      </Logo>

      <Buttons>
        <LoginButton 
          title={translated.login} 
          onPress={() => {
            navigation.navigate('Dashboard' as never)
          }}
        />
        <RegisterButton 
          title={translated.register} 
          onPress={() => {
            navigation.navigate('Dashboard' as never)
          }}
        />
      </Buttons>
    </Container>
  );
}