import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text } from '../../../core';

const LoadingOverlay: React.FC<any> = ({ fadeAnimation }) => (
  <Animated.View
    style={[
      styles.animatedContainer,
      {
        opacity: fadeAnimation,
      },
    ]}
  >
    <LinearGradient
      style={styles.background}
      colors={['rgb(100, 150, 255)', 'rgb(255, 255, 255)']}
    />
    <Text.Heading2 color='white'>LOADING...</Text.Heading2>
  </Animated.View>
);

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  animatedContainer: {
    zIndex: 99,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingOverlay;
