import React from 'react';
import { View } from 'react-native';

import { Text } from '@src/core';
import { sizing } from '@src/constants';
import { ScreenWrapper, ModalContainer, Button } from '@src/components';

const MainMenuScreen: React.FC<any> = ({ route, navigation }) => {
  const { gameScreenName, menuOptionScreenName } = route.params;

  return (
    <ScreenWrapper>
      <ModalContainer withBackground={false} isFullScreen={false}>
        <Text.Heading1 textAlign='center'>My</Text.Heading1>
        <Text.Heading1 textAlign='center'>Super</Text.Heading1>
        <Text.Heading1 textAlign='center'>JavaScript</Text.Heading1>
        <Text.Heading1 textAlign='center'>Adventure</Text.Heading1>
      </ModalContainer>

      <View>
        <Button
          title='Start game'
          style={{ marginBottom: sizing.m }}
          onPress={() => {
            navigation.navigate(gameScreenName);
          }}
        />
        <Button
          title='About'
          onPress={() => {
            navigation.navigate(menuOptionScreenName, { type: 'about' });
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default MainMenuScreen;
