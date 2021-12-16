import React from 'react';
import { View } from 'react-native';

import { Text, Layout } from '@src/core';

const About: React.FC<any> = () => (
  <View>
    <Layout.Section>
      <Text.Heading2>About</Text.Heading2>
      <Text.Body>
        This is my personal world created with JavaScript, React Native,
        LaikaJS, WebGL and other cool stuff. This was made as a learning project
        to be shared with friends and colleagues.
      </Text.Body>
    </Layout.Section>

    <Layout.Section>
      <Text.Heading2>Controls</Text.Heading2>
      <Text.Body>Press and swipe in the direction you want to move.</Text.Body>
    </Layout.Section>

    <Layout.Section>
      <Text.Heading2>Stack</Text.Heading2>
      <Text.Body>React Native</Text.Body>
      <Text.Body>Expo</Text.Body>
      <Text.Body>LaikaJS</Text.Body>
    </Layout.Section>
  </View>
);

export default About;
