import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { AppNavigator } from './src/navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'press-start': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

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
