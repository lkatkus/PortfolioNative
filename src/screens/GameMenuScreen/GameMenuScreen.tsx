import React from 'react';
import { Button } from 'react-native';

import { ModalContainer } from '../../components';

const GameMenuScreen: React.FC<any> = ({ route, navigation }) => {
  const { menuOptionScreenName } = route.params;

  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <Button
        onPress={() =>
          navigation.navigate(menuOptionScreenName, { type: 'aboutMe' })
        }
        title='About me'
      />
      <Button
        onPress={() =>
          navigation.navigate(menuOptionScreenName, { type: 'skills' })
        }
        title='Skills'
      />
      <Button
        onPress={() =>
          navigation.navigate(menuOptionScreenName, { type: 'other' })
        }
        title='Other'
      />
      <Button
        onPress={() =>
          navigation.navigate(menuOptionScreenName, { type: 'contacts' })
        }
        title='Contacts'
      />
    </ModalContainer>
  );
};

export default GameMenuScreen;
