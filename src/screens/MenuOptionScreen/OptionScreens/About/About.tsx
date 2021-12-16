import React from 'react';
import { View } from 'react-native';

import { Text, Layout } from '@src/core';

const About: React.FC<any> = () => (
  <View>
    <Layout.Section>
      <Text.Heading2>About</Text.Heading2>
      <Layout.SubSection>
        <Text.Body>
          This is my personal world created with JavaScript. This is meant to be
          a learning project to be shared with friends and colleagues.
        </Text.Body>
      </Layout.SubSection>
      <Layout.SubSection>
        <Text.Body>
          The app itself was built using React Native and game logic is handled
          by my personal game engine - LaikaJS. Render engine is using WebGL
          with Expo GLView. Assets were drawn using the amazing Aseprite editor.
        </Text.Body>
      </Layout.SubSection>
    </Layout.Section>

    <Layout.Section>
      <Text.Heading2>Controls</Text.Heading2>
      <Text.Body>
        Press anywhere on the screen and swipe in the direction you want to
        move.
      </Text.Body>
    </Layout.Section>
  </View>
);

export default About;
