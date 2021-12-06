import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from '../../../../components';

const IMAGES = [
  require('./images/arch-1.jpg'),
  require('./images/arch-2.jpg'),
  require('./images/arch-3.jpg'),
  require('./images/arch-4.jpg'),
  require('./images/arch-5.jpg'),
  require('./images/arch-6.jpg'),
  require('./images/arch-7.jpg'),
  require('./images/arch-8.jpg'),
  require('./images/arch-9.jpg'),
];

const Other: React.FC<any> = () => (
  <View>
    <View style={styles.sectionContainer}>
      <Text.Heading2>Other stuff</Text.Heading2>
      <Text.Body>
        Some fancy words I know, from my previous endeavours - Autocad,
        Archicad, 3DS MAX, Archicad, Photoshop, Illustrator, Aperture, Bokeh.
      </Text.Body>
    </View>

    <View>
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
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});

export default Other;
