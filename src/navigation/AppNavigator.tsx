import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MainMenuScreen,
  GameScreen,
  GameMenuScreen,
  MenuOptionScreen,
} from '@src/screens';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  GameScreen: { gameMenuScreenName: any; menuOptionScreenName: any };
  MainMenuScreen: { gameScreenName: any; menuOptionScreenName: any; type: any };
  GameMenuScreen: { menuOptionScreenName: any };
  MenuOptionScreen: undefined;
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainMenuScreen.name}>
        <Stack.Screen
          name={GameScreen.name}
          component={GameScreen}
          options={{
            headerShown: false,
          }}
          initialParams={{
            gameMenuScreenName: GameMenuScreen.name,
            menuOptionScreenName: MenuOptionScreen.name,
          }}
        />

        <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
          <Stack.Screen
            name={MainMenuScreen.name}
            component={MainMenuScreen}
            options={{
              headerShown: false,
            }}
            initialParams={{
              gameScreenName: GameScreen.name,
              menuOptionScreenName: MenuOptionScreen.name,
            }}
          />
          <Stack.Screen
            name={GameMenuScreen.name}
            component={GameMenuScreen}
            options={{
              headerShown: false,
            }}
            initialParams={{
              menuOptionScreenName: MenuOptionScreen.name,
            }}
          />
          <Stack.Screen
            name={MenuOptionScreen.name}
            component={MenuOptionScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
