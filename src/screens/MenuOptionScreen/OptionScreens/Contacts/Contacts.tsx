import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from '../../../../components';

const ICON_LINKS = [
  {
    icon: <Ionicons name='logo-linkedin' size={32} color='black' />,
    pageUrl: 'https://www.linkedin.com/in/laimonas-katkus-ba334071',
  },
  {
    icon: <Ionicons name='logo-github' size={32} color='black' />,
    pageUrl: 'https://github.com/lkatkus',
  },
  {
    icon: <MaterialCommunityIcons name='dev-to' size={32} color='black' />,
    pageUrl: 'https://dev.to/lkatkus',
  },
];

const Contacts: React.FC<any> = () => (
  <View>
    <View>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body>
        If you want to know more about my experience, check out my Github or
        Dev.to profiles, or just message me on LinkedIn.
      </Text.Body>
    </View>

    <View style={styles.iconsContainer}>
      {ICON_LINKS.map(({ icon, pageUrl }, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => Linking.openURL(pageUrl)}
        >
          {icon}
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default Contacts;
