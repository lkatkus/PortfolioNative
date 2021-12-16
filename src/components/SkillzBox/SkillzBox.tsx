import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors, sizing } from '@src/constants';

interface SkillzBoxProps {
  color?: string;
  label?: string;
  labelComponent?: any;
}

const SkillzBox: React.FC<SkillzBoxProps> = ({
  color = colors.pink,
  label,
  labelComponent: LabelComponent,
}) => {
  const barWidth = Math.round(Math.random() * 100) / 100;
  const remainderWidth = 1 - barWidth;

  return (
    <View style={styles.barBontainer}>
      {label && LabelComponent && (
        <View style={{ flex: 0.4 }}>
          <LabelComponent>{label}</LabelComponent>
        </View>
      )}

      <View style={[styles.bar, { backgroundColor: color, flex: barWidth }]} />
      <View
        style={[
          styles.barRemainder,
          { backgroundColor: color, flex: remainderWidth },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barBontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: { height: sizing.m, flex: 1 },
  barRemainder: { height: sizing.m, flex: 1, opacity: 0.3 },
});

export default SkillzBox;
