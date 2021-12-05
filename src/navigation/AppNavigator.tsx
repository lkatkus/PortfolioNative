import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MainMenuScreen,
  GameScreen,
  GameMenuScreen,
  MenuOptionScreen,
} from '../screens';

export const SCREENS = {
  MapScreen: 'MapScreen',
  NewPlaceScreen: 'NewPlaceScreen',
  PlaceDetailScreen: 'PlaceDetailScreen',
  PlacesListScreen: 'PlacesListScreen',
};

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainMenuScreen.name}>
        <Stack.Screen
          name={GameScreen.name}
          component={GameScreen}
          options={{
            headerShown: false,
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
