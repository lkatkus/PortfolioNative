import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PixelBordersProps {
  color?: string;
  width?: number;
}

const PixelBorders: React.FC<PixelBordersProps> = ({
  color = 'black',
  width = 4,
}) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        common: {
          position: 'absolute',
          backgroundColor: color,
        },
        top: { height: width, top: -width, left: 0, right: 0 },
        bottom: { height: width, bottom: -width, left: 0, right: 0 },
        left: { width, left: -width, top: 0, bottom: 0 },
        right: { width, right: -width, top: 0, bottom: 0 },
      }),
    [color, width]
  );

  return (
    <React.Fragment>
      <View style={[styles.common, styles.top]} />
      <View style={[styles.common, styles.bottom]} />
      <View style={[styles.common, styles.left]} />
      <View style={[styles.common, styles.right]} />
    </React.Fragment>
  );
};

export default PixelBorders;
