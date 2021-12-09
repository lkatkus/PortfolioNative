import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SkillzBoxProps {
  color?: string;
  label?: string;
  labelComponent?: any;
}

const SkillzBox: React.FC<SkillzBoxProps> = ({
  color = '#e91e63',
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
  bar: { height: 10, flex: 1 },
  barRemainder: { height: 10, flex: 1, opacity: 0.3 },
});

export default SkillzBox;
