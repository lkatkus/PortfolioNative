import React from 'react';
import { View, Button } from 'react-native';

import { ModalContainer, Text } from '../../components';

const MainMenuScreen: React.FC<any> = ({ route, navigation }) => {
  const { gameScreenName, menuOptionScreenName } = route.params;

  return (
    <View style={{ backgroundColor: 'blue', flex: 1 }}>
      <ModalContainer>
        <Text.Heading1>My Super JavaScript Adventure</Text.Heading1>
        <View>
          <Button
            onPress={() => navigation.navigate(gameScreenName)}
            title='Start game'
          />
          <Button
            onPress={() =>
              navigation.navigate(menuOptionScreenName, { type: 'about' })
            }
            title='About'
          />
        </View>
      </ModalContainer>
    </View>
  );
};

export default MainMenuScreen;
