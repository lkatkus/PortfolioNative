import React from 'react';
import { Animated, View, Button, Text, TouchableOpacity } from 'react-native';
import { GLView } from 'expo-gl';
import { Ionicons } from '@expo/vector-icons';

import { ControlsHandler } from '../../components';
import { initLaikaGame } from './GameScreen.utils';

const MIN_DISPLAY_LOADING = 500;

const GameScreen: React.FC<any> = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const [gl, setGl] = React.useState<any>(null);
  const [game, setGame] = React.useState<any>(null);
  const [isLoaded, setIsLoaded] = React.useState<any>(false);
  const [activeEvent, setActiveEvent] = React.useState<any>(null);
  const [moveState, setMoveState] = React.useState<any>(null);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    if (gl) {
      initLaikaGame(gl, {
        handleGameReady: (game: any) => {
          setGame(game);

          setTimeout(() => {
            fadeOut();

            setTimeout(() => {
              setIsLoaded(true);
            }, 200);
          }, MIN_DISPLAY_LOADING);
        },
        handleOpenTab: (tab: any) => {
          navigation.navigate('MenuOptionScreen', { type: tab });
        },
        handleOpenPage: (pageUrl: any) => {
          alert(pageUrl);
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
    <React.Fragment>
      {!isLoaded && (
        <Animated.View
          style={[
            {
              zIndex: 20,
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightblue',
            },
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Text>LOADING...</Text>
        </Animated.View>
      )}

      {activeEvent && (
        <View
          style={{
            zIndex: 20,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderColor: 'white',
              borderWidth: 3,
              padding: 10,
            }}
          >
            <Text style={{ color: 'white' }}>{activeEvent.text}</Text>
          </View>
          {activeEvent.onClick && (
            <View
              style={{
                alignItems: 'flex-end',
              }}
            >
              <Button
                title={activeEvent.onClick.text}
                onPress={activeEvent.onClick.clickHandler}
              />
            </View>
          )}
        </View>
      )}

      <View style={{ flex: 1 }}>
        {/* @TODO move to separate component FloatingButton? */}
        <View style={{ zIndex: 10, position: 'absolute', top: 0, left: 0 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameMenuScreen')}
            style={{ padding: 10 }}
          >
            <Ionicons name='ios-menu' size={24} color='white' />
          </TouchableOpacity>
        </View>

        <ControlsHandler handleStateChange={setMoveState}>
          <GLView
            style={{ flex: 1, backgroundColor: 'black' }}
            onContextCreate={setGl}
          />
        </ControlsHandler>
      </View>
    </React.Fragment>
  );
};

export default GameScreen;
