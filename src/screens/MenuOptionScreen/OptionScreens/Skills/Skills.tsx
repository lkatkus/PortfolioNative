import React from 'react';
import { View } from 'react-native';

import { SkillzBox } from '@src/components';
import { Text, Layout } from '@src/core';

const SKILLZ_COUNT = 6;
const SKILLZ_LIST = [
  'ReactJS',
  'JS',
  'Googling',
  'HTML',
  'WebGL',
  'Skiing',
  'NodeJS',
  'Memes',
  'Agile',
  'GraphQL',
  'AI',
  'VR',
  'Big data',
  'Scrum',
  'Cooking',
  'Arts',
];

const getRandomFromList = (count: number, list: string[]) => {
  const values: string[] = [];

  while (values.length < count) {
    const newIndex = Math.floor(Math.random() * list.length);
    const newValue = list[newIndex];

    if (!values.includes(newValue)) {
      values.push(newValue);
    }
  }

  return values;
};

const Skills: React.FC<any> = () => {
  const skillsToRender = getRandomFromList(SKILLZ_COUNT, SKILLZ_LIST);

  return (
    <View>
      <Layout.Section>
        <Text.Heading2>Experience</Text.Heading2>
        <Text.Body>
          Up to this point I have worked on multiple large scale projects,
          mainly on the front-end side. Stack consited of React, Redux, React +
          TypeScript, GraphQl and other fancy words.
        </Text.Body>
        <Text.Body>
          In general, I am interested in all thing JavaScript: VanillaJS,
          TypeScript, React, React Native, Node, WebGL and graphics stuff. Right
          now I am focused on developing web apps with React, but also trying
          out mobile development with React Native on my free time.
        </Text.Body>
      </Layout.Section>

      <View>
        <Layout.SubSection>
          <Text.Heading2>Skills</Text.Heading2>
          <Text.Body>
            People seem to like skill bars. So here is a list of random words
            and some generated values.
          </Text.Body>
          {skillsToRender.map((skill) => (
            <SkillzBox
              key={skill}
              label={skill}
              labelComponent={Text.SubBody}
            />
          ))}
        </Layout.SubSection>
      </View>
    </View>
  );
};

export default Skills;
