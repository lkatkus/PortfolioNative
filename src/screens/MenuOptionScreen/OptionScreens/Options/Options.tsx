import React from 'react';
import { View } from 'react-native';

import { Text, Layout } from '@src/core';

const Options: React.FC = () => (
  <View>
    <Layout.Section>
      <Text.Heading2>Options</Text.Heading2>
    </Layout.Section>

    <Layout.Section>
      <Text.Heading2>Controls</Text.Heading2>
      <Text.Body>
        Press anywhere on the screen, swipe and hold a bit in the direction you
        want to move.
      </Text.Body>
    </Layout.Section>

    <Layout.Section>
      <Text.Heading2>Audio & Video</Text.Heading2>
      <Text.Body>Coming soon...</Text.Body>
    </Layout.Section>
  </View>
);

export default Options;
