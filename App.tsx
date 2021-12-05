import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import { AppNavigator } from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
