import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from '../../core';

const VARIANTS = {
  primary: {},
  secondary: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: 'white',
    borderWidth: 2,
  },
};

const TEXT_VARIANTS = {
  primary: { color: 'black' },
  secondary: { color: 'white' },
};

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { ...VARIANTS[variant] }]}
    >
      <Text.Heading2 color={TEXT_VARIANTS[variant].color}>
        {title}
      </Text.Heading2>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;