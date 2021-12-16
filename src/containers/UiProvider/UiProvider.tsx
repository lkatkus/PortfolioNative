import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@src/core';
import { Button } from '@src/components';
import { colors, sizing, elevation } from '@src/constants';

interface EventContainerProps {
  event: any;
  handleMenuClick: () => void;
}

const UiProvider: React.FC<EventContainerProps> = ({
  event,
  handleMenuClick,
  children,
}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleMenuClick} style={styles.menuButton}>
            <Ionicons name='ios-menu' size={sizing.xxl} color={colors.white} />
          </TouchableOpacity>
        </View>

        {event && (
          <React.Fragment>
            <View style={styles.textContainer}>
              <Text.Body color={colors.white}>{event.text}</Text.Body>
            </View>
            {event.onClick && (
              <View style={styles.buttonContainer}>
                <Button
                  variant='secondary'
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
  textContainer: {
    flex: 1,
    borderWidth: 2,
    margin: sizing.m,
    padding: sizing.l,
    borderColor: colors.white,
    backgroundColor: colors.blackOpaque,
  },
  buttonContainer: {
    margin: sizing.m,
    alignItems: 'flex-end',
  },
  menuButton: {
    padding: sizing.s,
  },
});

export default UiProvider;
