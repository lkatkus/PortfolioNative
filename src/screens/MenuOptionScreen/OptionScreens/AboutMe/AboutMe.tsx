import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SkillzBox } from '../../../../components';
import { Text } from '../../../../core';

const AboutMe: React.FC<any> = () => (
  <View>
    <View style={styles.sectionContainer}>
      <Text.Heading2>Laimonas Katkus</Text.Heading2>
      <Text.Body>Race - Human</Text.Body>
      <Text.Body>Class - Software developer</Text.Body>
      <Text.Body>Location - Lithuania, Vilnius</Text.Body>
      <Text.Body>Superpower - Brazilian Jiu-Jitsu blue belt</Text.Body>
    </View>

    <View style={styles.sectionContainer}>
      <Text.Heading2>Stats</Text.Heading2>
      <View>
        <SkillzBox label={'HP'} labelComponent={Text.Body} color='crimson' />
      </View>

      <View>
        <SkillzBox label={'MP'} labelComponent={Text.Body} color='navy' />
      </View>

      <View>
        <SkillzBox label={'EXP'} labelComponent={Text.Body} color='gold' />
      </View>
    </View>

    <View>
      <View style={styles.subSectionContainer}>
        <Text.Heading2>Origins</Text.Heading2>
        <Text.Body>
          Architect (building kind) and project manager by education. I have
          worked on multiple real estate projects of many different scales in
          many different roles - from architect to project manager on both
          contractors and clients side.
        </Text.Body>
        <Text.Body>
          Even though, IT and tech stuff in general was in my life from early
          age, the decision to move to IT, was not an easy one. Right now I am
          glad, that I have followed my gut.
        </Text.Body>
      </View>
      <Text.Body>To be continued...</Text.Body>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
  subSectionContainer: {
    marginBottom: 8,
  },
});

export default AboutMe;