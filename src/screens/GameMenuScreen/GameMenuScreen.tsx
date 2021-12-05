import React from 'react';
import { Button } from 'react-native';

import { ModalContainer } from '../../components';

const GameMenuScreen: React.FC<any> = ({ navigation }) => {
  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <Button
        onPress={() =>
          navigation.navigate('MenuOptionScreen', { type: 'aboutMe' })
        }
        title='About me'
      />
      <Button
        onPress={() =>
          navigation.navigate('MenuOptionScreen', { type: 'skills' })
        }
        title='Skills'
      />
      <Button
        onPress={() =>
          navigation.navigate('MenuOptionScreen', { type: 'other' })
        }
        title='Other'
      />
      <Button
        onPress={() =>
          navigation.navigate('MenuOptionScreen', { type: 'contacts' })
        }
        title='Contacts'
      />
    </ModalContainer>
  );
};

export default GameMenuScreen;
