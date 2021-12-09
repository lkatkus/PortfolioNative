import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../core';
import { Button } from '../../components';

interface EventContainerProps {
  event: any;
}

const EventContainer: React.FC<EventContainerProps> = ({ event }) => {
  return (
    <View style={styles.container}>
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
    paddingHorizontal: 24,
    marginTop: 56,
  },
  textContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderColor: 'white',
    borderWidth: 2,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    alignItems: 'flex-end',
  },
});

export default EventContainer;
