import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '../../core';
import { Button } from '../../components';

interface EventContainerProps {
  event: any;
  handleMenuClick: () => void;
}

const EventContainer: React.FC<EventContainerProps> = ({
  event,
  handleMenuClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleMenuClick} style={styles.menuButton}>
          <Ionicons name='ios-menu' size={32} color='white' />
        </TouchableOpacity>
      </View>

      {event && (
        <React.Fragment>
          <View style={styles.textContainer}>
            <Text.Body color='white'>{event.text}</Text.Body>
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
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: 16,
  },
  textContainer: {
    marginTop: 16,
    padding: 16,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  menuButton: {
    padding: 4,
  },
});

export default EventContainer;
