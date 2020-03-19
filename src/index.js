import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#ddd',
  },
});

console.tron.log('Junior Ferreira');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Junior Ferreira</Text>
    </View>
  );
}
