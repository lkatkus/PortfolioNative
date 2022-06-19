import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, Layout } from '@src/core';

interface LinkProps {
  to: string;
  children: string;
}

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <TouchableOpacity onPress={() => Linking.openURL(to)}>
    <Text.Body>{children}</Text.Body>
  </TouchableOpacity>
);

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
      <Text.Heading2>MUSIC & SFX</Text.Heading2>
      <View style={{ flexDirection: 'row' }}>
        <Text.Body>Music - </Text.Body>
        <Link to='https://www.soundimage.org'>www.soundimage.org</Link>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text.Body>Sound effects - </Text.Body>
        <Link to='https://www.zapsplat.com'>www.zapsplat.com</Link>
      </View>
    </Layout.Section>
  </View>
);

export default About;
