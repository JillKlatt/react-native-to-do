import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is the title Text!</Text>
      <h1>This is the title Text!</h1>
      <List name='Main To Do'/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
