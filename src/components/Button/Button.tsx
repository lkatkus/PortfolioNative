import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from '@src/core';
import { colors, sizing } from '@src/constants';

const VARIANTS = StyleSheet.create({
  primary: {},
  secondary: {
    backgroundColor: colors.blackOpaque,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.white,
  },
});

const TEXT_VARIANTS = {
  primary: { color: colors.black },
  secondary: { color: colors.white },
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
      activeOpacity={0.7}
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
    paddingVertical: sizing.s,
    paddingHorizontal: sizing.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
