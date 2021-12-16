import React from 'react';
import { View, StyleSheet } from 'react-native';

interface LayoutBaseProps {
  marginBottom: number;
}

const LayoutBase = (
  props: LayoutBaseProps
): React.FC<{ style?: { [key: string]: any }[] }> => {
  const styles = StyleSheet.create({
    container: {
      ...props,
    },
  });

  return ({ children, style = [] }) => (
    <View style={[styles.container, ...style]}>{children}</View>
  );
};

export default LayoutBase;
