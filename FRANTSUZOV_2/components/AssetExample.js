import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <div style={styles.block}>
      </div>
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
  paragraph2: {
    margin: 0,
    flex: 1,
    marginTop: 42,
    fontSize: 12,
    textAlign: 'left',
  },

});
