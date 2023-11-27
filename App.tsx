import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Keyboard, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MyKeyboard />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
