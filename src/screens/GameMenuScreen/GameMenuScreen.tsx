import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@src/navigation';
import { ModalContainer, Button } from '@src/components';

type GameMenuScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GameMenuScreen'
>;

const GameMenuScreen: React.FC<GameMenuScreenProps> = ({
  route,
  navigation,
}) => {
  const { navigate } = navigation;
  const { menuOptionScreenName } = route.params;

  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <Button
        title='Profile'
        onPress={() => navigate(menuOptionScreenName, { type: 'profile' })}
      />
      <Button
        title='Skills'
        onPress={() => navigate(menuOptionScreenName, { type: 'skills' })}
      />
      <Button
        title='Other'
        onPress={() => navigate(menuOptionScreenName, { type: 'other' })}
      />
      <Button
        title='Contacts'
        onPress={() => navigate(menuOptionScreenName, { type: 'contacts' })}
      />
      <Button
        title='About'
        onPress={() => navigate(menuOptionScreenName, { type: 'about' })}
      />
    </ModalContainer>
  );
};

export default GameMenuScreen;
