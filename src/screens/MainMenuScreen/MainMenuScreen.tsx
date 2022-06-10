import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Text } from '@src/core';
import { sizing } from '@src/constants';
import { RootStackParamList } from '@src/navigation';
import { ScreenWrapper, ModalContainer, Button } from '@src/components';

type MainMenuScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MainMenuScreen'
>;

const MainMenuScreen: React.FC<MainMenuScreenProps> = ({
  route,
  navigation,
}) => {
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
