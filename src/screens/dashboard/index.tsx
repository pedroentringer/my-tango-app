import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti'

import { translate } from '../../locales'

import { RowColumn } from '../../global/styles'
import { 
  Container, 
  ScrollView,
  Header,
  Title,
  TitleUserName,
  Profile,
  PlansInfo 
} from './styles'

import CardInfo from '../../components/cardInfo';

export default function Dashboard() {
  const [lang, setLang] = useState('fr')

  const translated = translate(lang);

  return (
    <Container>
      <ScrollView>

        <Header>
          <RowColumn>
            <Title>{translated.title},</Title>
            <TitleUserName>Pedro!</TitleUserName>
          </RowColumn>

          <Profile
            source={{
              uri: 'https://avatars.githubusercontent.com/u/29384810?v=4',
            }}
          />
        </Header>

        <PlansInfo>
       
          <CardInfo 
            gradient 
            icon='attach-money'
            title={translated.balance}
            value={`${translated.money}34,80`}
            button={translated.charge}
          />

          <CardInfo  
            icon='wifi-tethering'
            title={translated.yourData}
            value='17.2'
            valueComplement='GB'
            button={translated.charge}
          />

          <CardInfo  
            icon='sms'
            title={translated.texts}
            value='250'
            valueComplement={translated.perDay}
            button={translated.charge}
          />
            
        </PlansInfo>
        
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
          marginTop: 40
        }}>
          <Button title='Ingles' onPress={() => setLang('en')} />
          <Button title='Português' onPress={() => setLang('pt')} />
          <Button title='Francês' onPress={() => setLang('fr')} />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  shape: {
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
