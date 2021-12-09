import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GLView } from 'expo-gl';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';

import {
  LoadableScreen,
  EventContainer,
  ControlsProvider,
} from '../../containers';
import { initLaikaGame } from './GameScreen.utils';

const GameScreen: React.FC<any> = ({ route, navigation }) => {
  const { gameMenuScreenName, menuOptionScreenName } = route.params;

  const [gl, setGl] = React.useState<any>(null);
  const [game, setGame] = React.useState<any>(null);
  const [isLoaded, setIsLoaded] = React.useState<any>(false);
  const [activeEvent, setActiveEvent] = React.useState<any>(null);
  const [moveState, setMoveState] = React.useState<any>(null);

  React.useEffect(() => {
    if (gl) {
      initLaikaGame(gl, {
        handleGameReady: (game: any) => {
          setGame(game);
          setIsLoaded(true);
        },
        handleOpenTab: (tab: any) => {
          navigation.navigate(menuOptionScreenName, { type: tab });
        },
        handleOpenPage: (pageUrl: string) => {
          Linking.openURL(pageUrl);
        },
        handleSetEvent: (eventData: any) => {
          setActiveEvent(eventData);
        },
      });
    }
  }, [gl]);

  React.useEffect(() => {
    if (game) {
      const { isMoving, movingDirection } = moveState;

      if (isMoving && movingDirection) {
        game.player.moveStart(movingDirection);
      } else {
        game.player.moveEnd();
      }
    }
  }, [moveState]);

  return (
    <LoadableScreen isLoaded={!isLoaded}>
      {activeEvent && <EventContainer event={activeEvent} />}

      {/* @TODO move to separate component FloatingButton? */}
      <View style={{ zIndex: 10, position: 'absolute', top: 0, left: 0 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(gameMenuScreenName)}
          style={{ padding: 10 }}
        >
          <Ionicons name='ios-menu' size={32} color='white' />
        </TouchableOpacity>
      </View>

      <ControlsProvider handleStateChange={setMoveState}>
        <GLView
          style={{ flex: 1, backgroundColor: 'black' }}
          onContextCreate={setGl}
        />
      </ControlsProvider>
    </LoadableScreen>
  );
};

export default GameScreen;
