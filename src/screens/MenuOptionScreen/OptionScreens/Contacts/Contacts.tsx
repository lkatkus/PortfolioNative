import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../../../components';

const Contacts: React.FC<any> = () => (
  <View>
    <View style={styles.sectionContainer}>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body>
        If you want to know more about my experience, check out my Github or
        Dev.to profiles, or just message me on LinkedIn.
      </Text.Body>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});

export default Contacts;
