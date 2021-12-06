import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, SkillzBox } from '../../../components';

const SKILLZ_LIST = ['ReactJS', 'HTML', 'JS', 'Skiing', 'NodeJS', 'GraphQL'];

const Skills: React.FC<any> = () => (
  <View>
    <View style={styles.sectionContainer}>
      <Text.Heading2>Experience</Text.Heading2>
      <Text.Body>
        Up to this point I have worked on multiple large scale projects, mainly
        on the front-end side. Stack consited of React, Redux, React +
        TypeScript, GraphQl and other fancy words.
      </Text.Body>
      <Text.Body>
        In general, I am interested in all thing JavaScript: VanillaJS,
        TypeScript, React, React Native, Node, WebGL and graphics stuff. Right now I am focused on
        developing web apps with React, but also trying out mobile development
        with React Native on my free time.
      </Text.Body>
    </View>

    <View>
      <View style={styles.subSectionContainer}>
        <Text.Heading2>Skills</Text.Heading2>
        {SKILLZ_LIST.map((skill) => (
          <SkillzBox key={skill} label={skill} labelComponent={Text.Body} />
        ))}
      </View>

      <Text.SubBody>
        * People seem to like skill bars. So this is just a list with randomly
        generated values.
      </Text.SubBody>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
  subSectionContainer: {
    marginBottom: 8,
  }
});

export default Skills;
