import React from 'react';

import { ModalContainer } from '../../components';
import { About, AboutMe, Skills, Other, Contacts } from './OptionScreens';

const getOptionComponent = (type: any): React.FC<any> => {
  let OptionComponent;

  // @TODO map from available screens
  switch (type) {
    case 'about':
      OptionComponent = About;
      break;
    case 'aboutMe':
      OptionComponent = AboutMe;
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
    default:
      OptionComponent = About;
  }

  return OptionComponent;
};

const MenuOptionScreen: React.FC<any> = ({ route, navigation }) => {
  const { type } = route.params;
  const OptionComponent = getOptionComponent(type);

  return (
    <ModalContainer handleCloseModal={() => navigation.goBack()}>
      <OptionComponent />
    </ModalContainer>
  );
};
export default MenuOptionScreen;
