import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { PixelBorders, Text } from '@src/core';
import { colors, sizing } from '@src/constants';

const VARIANTS = {
  primary: {
    body: { backgroundColor: colors.pink },
    border: { color: colors.lightPink },
  },
  secondary: {
    body: { backgroundColor: colors.blackOpaque },
    border: { color: colors.white },
  },
};

const TEXT_VARIANTS = {
  primary: { color: colors.white },
  secondary: { color: colors.white },
};

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
  style?: { [key: string]: any };
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  title,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonContainer, { ...VARIANTS[variant].body, ...style }]}
    >
      <PixelBorders {...VARIANTS[variant].border} />
      <Text.Heading2 color={TEXT_VARIANTS[variant].color}>
        {title}
      </Text.Heading2>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: sizing.m,
    paddingHorizontal: sizing.l,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
