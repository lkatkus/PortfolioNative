import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { Text } from '../../../components';

const LoadingOverlay: React.FC<any> = ({ fadeAnimation }) => (
  <Animated.View
    style={[
      styles.animatedContainer,
      {
        opacity: fadeAnimation,
      },
    ]}
  >
    <Text.Heading2 color='white'>LOADING...</Text.Heading2>
  </Animated.View>
);

const styles = StyleSheet.create({
  animatedContainer: {
    zIndex: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(100, 150, 255)',
  },
});

export default LoadingOverlay;
