import { useState } from 'react';
import { View, Button } from 'react-native';

import { translate } from '../../locales'

import { RowColumn, Row, FlexWidth, Center } from '../../global/styles'
import { 
  Container, 
  ContainerPadding,
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
import { SectionTitle, TextBold, TextRegular } from '../../components/texts'
import { DefaultButton, PrimaryButton, IconPlusButton } from '../../components/buttons'

import topUpOptions from './mocks/topUpOptions';

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
          <SectionTitle>{translated.myInvoice}</SectionTitle>
          <Card>

            <Row>
              <FlexWidth>
                <RowColumn>
                  <TextRegular>{translated.detailedUsage}</TextRegular>
                  <Margin top={5} />
                  <TextBold>{translated.money}38,21</TextBold>
                  <Margin top={20} />
                  <DefaultButton title={translated.detailes} onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>

              <FlexWidth>
                <RowColumn>
                  <TextRegular>{translated.debt}</TextRegular>
                  <Margin top={5} />
                  <TextBold>{translated.money}21,14</TextBold>
                  <Margin top={20} />
                  <PrimaryButton title={translated.pay} onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>
            </Row>

            <Margin top={20} />

            <Row>
              <FlexWidth>
                <RowColumn>
                  <TextRegular>{translated.availableCredit}</TextRegular>
                  <Margin top={5} />
                  <TextBold>{translated.money}38,21</TextBold>
                </RowColumn>
              </FlexWidth>

              <FlexWidth>
                <RowColumn>
                  <IconPlusButton title={translated.increaseCreditLimit} onPress={() => {}}/>
                </RowColumn>
              </FlexWidth>
            </Row>

          </Card>

          <Margin top={30} />
          <SectionTitle>Top Up</SectionTitle>

          <Card>

            {topUpOptions.map((option, index) => {

              return (
                <ListRow key={`topUpOptions-${index}`}>
                  <Center>
                    <CircleIcon>
                      <Icon name={option.icon}/>
                    </CircleIcon>
                  </Center>

                  <Margin right={10} />

                  <FlexWidth>
                    <RowColumn>
                        <TextBold>{option.title}</TextBold>
                        <Margin top={5} />
                        <TextRegular>{option.description}</TextRegular>
                    </RowColumn>
                  </FlexWidth>

                  <Center>
                    <Icon name='arrow-forward-ios'/>
                  </Center>
                </ListRow>
              )
            })}

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