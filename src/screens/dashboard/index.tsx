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
  const [lang, setLang] = useState('en-US')

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
            icon='wifi-tethering'
            title='Teste'
            value='3'
            button='Charge'
          />

          <CardInfo  
            icon='wifi-tethering'
            title='Teste'
            value='3'
            button='Charge'
          />

          <CardInfo  
            icon='wifi-tethering'
            title='Teste'
            value='3'
            button='Charge'
          />
          
          
            
        </PlansInfo>
        
        <View style={{
          flexDirection: 'row'
        }}>
          <Button title='Ingles' onPress={() => setLang('en-US')} />
          <Button title='Português' onPress={() => setLang('pt-BR')} />
          <Button title='Francês' onPress={() => setLang('fr-FR')} />
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
