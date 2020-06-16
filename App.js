import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './component/hello';
import { Login } from './component/login';

export default function App() {

  return (
    <View >
      <Login />
     
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
