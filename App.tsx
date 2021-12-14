import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { AppNavigator } from './src/navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'pixel-operator': require('./assets/fonts/PixelOperator.ttf'),
    'pixel-operator-bold': require('./assets/fonts/PixelOperator-Bold.ttf'),
    'pixel-operator-mono-bold': require('./assets/fonts/PixelOperatorMono8-Bold.ttf'),
  });
};

const App = () => {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // @TODO maybe add game assets fetch here?
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
        // to prevent splash screen flashing
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
