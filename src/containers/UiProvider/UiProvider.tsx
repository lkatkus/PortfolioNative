import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PixelBorders, Text } from '@src/core';
import { Button } from '@src/components';
import { colors, sizing, elevation } from '@src/constants';

interface EventContainerProps {
  event: any;
  gameOptions: { audio: { music: { on: boolean }; sfx: { on: boolean } } };
  handleMenuClick: () => void;
  handleAudioToggleClick: () => void;
}

const UiProvider: React.FC<EventContainerProps> = ({
  event,
  gameOptions,
  handleMenuClick,
  handleAudioToggleClick,
  children,
}) => {
  const isSoundOn = gameOptions.audio.music.on;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleMenuClick} style={styles.menuButton}>
            <Ionicons name='ios-menu' size={sizing.xxl} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAudioToggleClick}
            style={styles.menuButton}
          >
            <Ionicons
              name={isSoundOn ? 'ios-volume-high' : 'ios-volume-off'}
              size={sizing.xxl}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        {event && (
          <React.Fragment>
            <View style={styles.textContainer}>
              <PixelBorders color='white' />
              <Text.Body color={colors.white}>{event.text}</Text.Body>
            </View>

            {event.onClick && (
              <View style={styles.eventButtonContainer}>
                <Button
                  title={event.onClick.text}
                  onPress={event.onClick.clickHandler}
                />
              </View>
            )}
          </React.Fragment>
        )}
      </View>
      {children}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: sizing.m,
    zIndex: elevation.modal,
  },
  buttonsContainer: {
    margin: sizing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventButtonContainer: {
    marginVertical: sizing.l,
    marginHorizontal: sizing.m,
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    margin: sizing.m,
    padding: sizing.l,
    backgroundColor: colors.blackOpaque,
  },
  menuButton: {
    padding: sizing.s,
  },
});

export default UiProvider;
