import React from 'react';
import { View, Image } from 'react-native';

import { Text, Layout } from '@src/core';

const IMAGES = [
  require('../../../../../assets/images/arch-1.jpg'),
  require('../../../../../assets/images/arch-2.jpg'),
  require('../../../../../assets/images/arch-3.jpg'),
  require('../../../../../assets/images/arch-4.jpg'),
  require('../../../../../assets/images/arch-5.jpg'),
  require('../../../../../assets/images/arch-6.jpg'),
  require('../../../../../assets/images/arch-7.jpg'),
  require('../../../../../assets/images/arch-8.jpg'),
  require('../../../../../assets/images/arch-9.jpg'),
];

const Other: React.FC<any> = () => (
  <View>
    <Layout.Section>
      <Text.Heading2>Other stuff</Text.Heading2>
      <Text.Body>
        Some fancy words I know, from my previous endeavours - Autocad,
        Archicad, 3DS MAX, Archicad, Photoshop, Illustrator, Aperture, Bokeh.
      </Text.Body>
    </Layout.Section>

    <Layout.SubSection>
      {IMAGES.map((imageUrl, index) => (
        <Image
          key={index}
          source={imageUrl}
          style={{
            width: '100%',
            height: 150,
          }}
        />
      ))}
    </Layout.SubSection>
  </View>
);

export default Other;
