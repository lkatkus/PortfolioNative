import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../../components';

const About: React.FC<any> = () => (
  <View>
    <View style={styles.sectionContainer}>
      <Text.Heading2>About</Text.Heading2>
      <Text.Body>
        This is my personal world creating with JavaScript, React, WebGL and
        other cool stuff.
      </Text.Body>
    </View>

    <View>
      <Text.Heading2>Controls</Text.Heading2>
      <Text.Body>Press and swipe in the direction you want to move.</Text.Body>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});

export default About;
