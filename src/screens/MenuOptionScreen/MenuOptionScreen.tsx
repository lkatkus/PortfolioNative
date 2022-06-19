import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@src/navigation';
import { ModalContainer } from '@src/components';
import {
  About,
  Profile,
  Skills,
  Other,
  Contacts,
  Options,
} from './OptionScreens';

const getOptionComponent = (type: any): React.FC<any> => {
  let OptionComponent;

  // @TODO map from available screens
  switch (type) {
    case 'about':
      OptionComponent = About;
      break;
    case 'profile':
      OptionComponent = Profile;
      break;
    case 'skills':
      OptionComponent = Skills;
      break;
    case 'other':
      OptionComponent = Other;
      break;
    case 'contacts':
      OptionComponent = Contacts;
      break;
    case 'options':
      OptionComponent = Options;
      break;
    default:
      OptionComponent = About;
  }

  return OptionComponent;
};

type MenuOptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MainMenuScreen'
>;

const MenuOptionScreen: React.FC<MenuOptionScreenProps> = ({
  route,
  navigation,
}) => {
  const { type } = route.params;
  const OptionComponent = getOptionComponent(type);

  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <OptionComponent />
    </ModalContainer>
  );
};
export default MenuOptionScreen;
