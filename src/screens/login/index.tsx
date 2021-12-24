import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { translate } from '../../locales'

import { RowColumn, Row, FlexWidth, Center } from '../../global/styles'
import { 
  Container, 
  ScrollView,
  Header,
  Title,
  TitleUserName,
  Profile,
  PlansInfo,
  Card,
  Icon, 
  CircleIcon,
  ListRow
} from './styles'

import CardInfo from '../../components/cardInfo';
import Margin from '../../components/margin';
import BottomMenu from '../../components/bottomMenu';
import { SectionTitle, TextBold, TextRegular } from '../../components/texts'
import { DefaultButton, PrimaryButton, IconPrimaryButton } from '../../components/buttons'

import { LanguageContext } from '../../providers/language';

export default function Login() {

  const { language } = useContext(LanguageContext)

  const translated = translate(language);

  return (
    <Container>
      <StatusBar style='light' />

    </Container>
  );
}