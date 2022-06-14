import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GLView } from 'expo-gl';
import * as Linking from 'expo-linking';
import { Game } from 'laikajs';

import { LoadableScreen, UiProvider, ControlsProvider } from '@src/containers';
import { RootStackParamList } from '@src/navigation';
import { initLaikaGame } from './GameScreen.utils';

type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'GameScreen'>;

const GameScreen: React.FC<GameScreenProps> = ({ route, navigation }) => {
  const { gameMenuScreenName, menuOptionScreenName } = route.params;

  const appState = React.useRef(AppState.currentState);
  const [gl, setGl] = React.useState<any>(null);
  const [game, setGame] = React.useState<Game | null>(null);
  const [isLoaded, setIsLoaded] = React.useState<any>(false);
  const [activeEvent, setActiveEvent] = React.useState<any>(null);
  const [moveState, setMoveState] = React.useState<any>(null);

  // @TODO maybe move outside or hook?
  React.useEffect(() => {
    if (game) {
      const subscription: any = AppState.addEventListener(
        'change',
        (nextAppState: AppStateStatus) => {
          if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
          ) {
            game?.audioPlayer.resume();
            return;
          }

          appState.current = nextAppState;
          game?.audioPlayer.pause(true);
        }
      );

      return () => {
        subscription.remove();
      };
    }
  }, [game]);

  React.useEffect(() => {
    if (gl) {
      initLaikaGame(gl, {
        handleGameReady: (game: Game) => {
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
      <UiProvider
        event={activeEvent}
        handleMenuClick={() => navigation.navigate(gameMenuScreenName)}
      />

      <ControlsProvider handleStateChange={setMoveState}>
        <GLView style={{ flex: 1 }} onContextCreate={setGl} />
      </ControlsProvider>
    </LoadableScreen>
  );
};

export default GameScreen;
