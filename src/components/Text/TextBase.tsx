import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextProps {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
  uppercase?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export default (
  baseProps: TextProps
): React.FC<TextProps & { children: string }> => {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: baseProps.fontSize,
      fontFamily: baseProps.fontFamily,
      textTransform: baseProps.uppercase ? 'uppercase' : undefined,
      textAlign: baseProps.textAlign,
    },
  });

  return ({ children }) => {
    return <Text style={styles.textStyle}>{children}</Text>;
  };
};
