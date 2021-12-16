import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ScreenWrapper, ModalContainer, Button } from '@src/components';
import { Text } from '@src/core';

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
