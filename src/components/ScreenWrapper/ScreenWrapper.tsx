import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenWrapper: React.FC<any> = ({ children }) => {
  return <View style={styles.pageWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: 'rgb(100, 150, 255)',
  },
});

export default ScreenWrapper;
