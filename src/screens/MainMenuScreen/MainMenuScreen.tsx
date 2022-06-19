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
        <View style={{ marginVertical: sizing.xxl }}>
          <Text.Heading1 textAlign='center'>My Super</Text.Heading1>
          <Text.Heading1 textAlign='center'>JavaScript</Text.Heading1>
          <Text.Heading1 textAlign='center'>Adventure</Text.Heading1>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Button
            title='Start game'
            style={{ marginBottom: sizing.l }}
            onPress={() => {
              navigation.navigate(gameScreenName);
            }}
          />
          <Button
            title='Options'
            style={{ marginBottom: sizing.l }}
            onPress={() => {
              navigation.navigate(menuOptionScreenName, { type: 'options' });
            }}
          />
          <Button
            title='About'
            style={{ marginBottom: sizing.l }}
            onPress={() => {
              navigation.navigate(menuOptionScreenName, { type: 'about' });
            }}
          />
        </View>
      </ModalContainer>
    </ScreenWrapper>
  );
};

export default MainMenuScreen;
