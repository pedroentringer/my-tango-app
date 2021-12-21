import { useState } from 'react';
import { View, Button } from 'react-native';

import { translate } from '../../locales'

import { RowColumn, Row, FlexWidth } from '../../global/styles'
import { 
  Container, 
  ContainerPadding,
  ScrollView,
  Header,
  Title,
  TitleUserName,
  Profile,
  PlansInfo,
  Card
} from './styles'

import CardInfo from '../../components/cardInfo';
import { SectionTitle, TextBold, TextRegular } from '../../components/texts'
import { DefaultButton, PrimaryButton, IconPlusButton } from '../../components/buttons'

export default function Dashboard() {
  const [lang, setLang] = useState('fr')

  const translated = translate(lang);

  return (
    <Container>
      <ScrollView>

        <ContainerPadding>
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
        </ContainerPadding>

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

        <ContainerPadding>
          <SectionTitle>My Invoice</SectionTitle>
          <Card>

            <Row>
              <FlexWidth>
                <RowColumn>
                  <TextRegular>Detailed Usage</TextRegular>
                  <TextBold>$38,21</TextBold>
                  <DefaultButton title='Detailes' onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>

              <FlexWidth>
                <RowColumn>
                  <TextRegular>Debt / Loan Former</TextRegular>
                  <TextBold>$21,14</TextBold>
                  <PrimaryButton title='Pay' onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>
            </Row>

            <Row>
              <FlexWidth>
                <RowColumn>
                  <TextRegular>Available credit</TextRegular>
                  <TextBold>$38,21</TextBold>
                </RowColumn>
              </FlexWidth>

              <FlexWidth>
                <RowColumn>
                  <IconPlusButton title='Increase the credit limit' onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>
            </Row>

          </Card>
        </ContainerPadding>
        
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