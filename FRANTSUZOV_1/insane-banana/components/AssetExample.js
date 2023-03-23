import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <Text style={styles.paragraph1}>
      Превращаем стресс в своего помощника
      </Text>
      <Text style={styles.paragraph2}>
      Превращаем стресс в своего помощника Превращаем стресс в своего помощника Превращаем стресс в своего помощника Превращаем стресс в своего помощника Превращаем стресс в своего помощника
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'blue'
    
  },
  paragraph1: {
    margin: 0,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph2: {
    margin: 0,
    marginTop: 42,
    fontSize: 12,
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
