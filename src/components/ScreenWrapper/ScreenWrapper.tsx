import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenWrapper: React.FC<any> = ({ children }) => {
  return (
    <View style={styles.pageWrapper}>
      <LinearGradient
        style={styles.background}
        colors={['rgb(100, 150, 255)', 'rgb(245, 245, 245)']}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  pageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ScreenWrapper;
