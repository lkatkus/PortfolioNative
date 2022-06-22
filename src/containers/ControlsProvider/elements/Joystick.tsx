import React from 'react';
import { View } from 'react-native';

import { colors } from '@src/constants';

const PAD_SIZE = 100;
const PAD_CENTER = PAD_SIZE / 2;
const JOYSTICK_SIZE = 40;
const JOYSTICK_SIZE_CENTER = PAD_CENTER - JOYSTICK_SIZE / 2;

const mag = (x: number, y: number) => {
  return Math.sqrt(x * x + y * y);
};

const Joystick: React.FC<any> = ({ startPos }) => {
  const { diffX, diffY } = startPos;

  const vMagnitude = mag(diffX, diffY);
  const vNormalX = vMagnitude != 0 ? diffX / vMagnitude : 0;
  const vNormalY = vMagnitude != 0 ? diffY / vMagnitude : 0;
  const limitedMagnitude =
    vMagnitude < PAD_CENTER - JOYSTICK_SIZE / 2
      ? vMagnitude
      : PAD_CENTER - JOYSTICK_SIZE / 2;

  const offsetX = JOYSTICK_SIZE_CENTER - limitedMagnitude * vNormalX;
  const offsetY = JOYSTICK_SIZE_CENTER - limitedMagnitude * vNormalY;

  return (
    <View
      style={{
        width: PAD_SIZE,
        height: PAD_SIZE,
        backgroundColor: colors.whiteOpaque,
        position: 'absolute',
        borderRadius: PAD_SIZE / 2,
        top: startPos?.y - Math.floor(PAD_SIZE / 2),
        left: startPos?.x - Math.floor(PAD_SIZE / 2),
      }}
    >
      <View
        style={{
          width: JOYSTICK_SIZE,
          height: JOYSTICK_SIZE,
          borderRadius: JOYSTICK_SIZE / 2,
          top: offsetY,
          left: offsetX,
          backgroundColor: colors.white,
        }}
      />
    </View>
  );
};

export default Joystick;
