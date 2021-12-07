import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BaseProps {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
  uppercase?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

interface TextProps {
  color?: string;
}

export default (
  baseProps: BaseProps
): React.FC<TextProps & { children: string }> => {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: baseProps.fontSize,
      fontFamily: baseProps.fontFamily,
      textTransform: baseProps.uppercase ? 'uppercase' : undefined,
      textAlign: baseProps.textAlign,
    },
  });

  return ({ children, color }) => {
    return <Text style={[styles.textStyle, { color: color }]}>{children}</Text>;
  };
};
