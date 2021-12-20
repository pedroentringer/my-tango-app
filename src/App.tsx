import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { translate } from './locales'

export default function App() {
  const [lang, setLang] = useState('en-US')

  const translated = translate(lang);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#EB3349', '#F45C43']}
        style={styles.gradient}
      >
        <Text style={{color: 'white'}}>{lang}</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>{translated.title}</Text>
        <View>
          <Button color='white' title='Ingles' onPress={() => setLang('en-US')} />
          <Button color='white' title='Português' onPress={() => setLang('pt-BR')} />
          <Button color='white' title='Francês' onPress={() => setLang('fr-FR')} />
        </View>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
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
});
