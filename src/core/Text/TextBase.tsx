import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors } from '@src/constants';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface BaseProps {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  color?: string;
  uppercase?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

interface TextProps {
  color?: string;
  fontSize?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export default (
  baseProps: BaseProps
): React.FC<TextProps & { children: string }> => {
  const styles = StyleSheet.create({
    textStyle: {
      color: colors.black,
      fontSize: baseProps.fontSize,
      fontFamily: baseProps.fontFamily,
      fontWeight: baseProps.fontWeight,
      lineHeight: baseProps.lineHeight,
      textTransform: baseProps.uppercase ? 'uppercase' : undefined,
      textAlign: baseProps.textAlign,
    },
  });

  return ({ children, color, textAlign }) => {
    return (
      <Text
        style={[
          styles.textStyle,
          {
            ...(color ? { color } : {}),
            textAlign,
          },
        ]}
      >
        {children}
      </Text>
    );
  };
};
