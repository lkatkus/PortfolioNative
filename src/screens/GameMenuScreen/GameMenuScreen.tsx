import React from 'react';

import { ModalContainer, Button } from '@src/components';

const GameMenuScreen: React.FC<any> = ({ route, navigation }) => {
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
