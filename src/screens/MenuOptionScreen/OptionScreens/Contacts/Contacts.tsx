import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, Layout } from '@src/core';
import { sizing, colors } from '@src/constants';

const ICON_LINKS = [
  {
    icon: (
      <Ionicons name='logo-linkedin' size={sizing.xxl} color={colors.black} />
    ),
    pageUrl: 'https://www.linkedin.com/in/laimonas-katkus-ba334071',
  },
  {
    icon: (
      <Ionicons name='logo-github' size={sizing.xxl} color={colors.black} />
    ),
    pageUrl: 'https://github.com/lkatkus',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name='dev-to'
        size={sizing.xxl}
        color={colors.black}
      />
    ),
    pageUrl: 'https://dev.to/lkatkus',
  },
];

const Contacts: React.FC<any> = () => (
  <View>
    <Layout.Section>
      <Text.Heading2>Contacts</Text.Heading2>
      <Text.Body>
        If you want to know more about my experience, check out my Github or
        Dev.to profiles, or just message me on LinkedIn.
      </Text.Body>
    </Layout.Section>

    <Layout.Section style={[styles.iconsContainer]}>
      {ICON_LINKS.map(({ icon, pageUrl }, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => Linking.openURL(pageUrl)}
        >
          {icon}
        </TouchableOpacity>
      ))}
    </Layout.Section>
  </View>
);

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: sizing.l,
  },
});

export default Contacts;
