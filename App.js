/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Header from './components/Header';
import CarList from './components/CarsList';

import SvgExample from './components/Charts';

// const App: () => React$Node = () => {
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
      {/* <SvgExample /> */}

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

// export default App;
