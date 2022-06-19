import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@src/navigation';
import { ModalContainer, Button } from '@src/components';
import { sizing } from '@src/constants';

type GameMenuScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GameMenuScreen'
>;

const ButtonWrapper: React.FC = ({ children }) => (
  <View style={{ marginBottom: sizing.l }}>{children}</View>
);

const GameMenuScreen: React.FC<GameMenuScreenProps> = ({
  route,
  navigation,
}) => {
  const { navigate } = navigation;
  const { menuOptionScreenName } = route.params;

  const navigationHandler = (targer: string) => () =>
    navigate(menuOptionScreenName, { type: targer });

  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <ButtonWrapper>
        <Button title='Profile' onPress={navigationHandler('profile')} />
      </ButtonWrapper>

      <ButtonWrapper>
        <Button title='Skills' onPress={navigationHandler('skills')} />
      </ButtonWrapper>

      <ButtonWrapper>
        <Button title='Other' onPress={navigationHandler('other')} />
      </ButtonWrapper>

      <ButtonWrapper>
        <Button title='Contacts' onPress={navigationHandler('contacts')} />
      </ButtonWrapper>

      <ButtonWrapper>
        <Button title='About' onPress={navigationHandler('about')} />
      </ButtonWrapper>
    </ModalContainer>
  );
};

export default GameMenuScreen;
