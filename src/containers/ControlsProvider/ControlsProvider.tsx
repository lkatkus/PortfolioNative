import React from 'react';
import { View } from 'react-native';

import { Joystick } from './elements';

const OFFSET_BEFORE_MOVE = 20;

const ControlsHandler: React.FC<any> = ({ handleStateChange, children }) => {
  const [startPos, setStartPos] = React.useState<{
    x: number;
    y: number;
    diffX: number;
    diffY: number;
  } | null>(null);
  const [isMoving, setIsMoving] = React.useState(false);
  const [movingDirection, setMovingDirection] = React.useState<string | null>(
    null
  );

  const handleMove = React.useCallback(
    (diffX?: any, diffY?: any) => {
      // @TODO update hardcoded left, right and etc. to configurable in engine
      if (diffX !== null) {
        // Moving left

        if (diffX > 0 && movingDirection !== 'left') {
          setMovingDirection('left');
          // Moving right
        } else if (diffX < 0 && movingDirection !== 'right') {
          setMovingDirection('right');
        }
      } else if (diffY !== null) {
        // Moving up
        if (diffY > 0 && movingDirection !== 'up') {
          setMovingDirection('up');
          // Moving down
        } else if (diffY < 0 && movingDirection !== 'down') {
          setMovingDirection('down');
        }
      }
    },
    [movingDirection]
  );

  React.useEffect(() => {
    handleStateChange({ isMoving, movingDirection });
  }, [isMoving, movingDirection]);

  return (
    <View
      style={{ flex: 1 }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={(e) => {
        setStartPos({
          x: e.nativeEvent.locationX,
          y: e.nativeEvent.locationY,
          diffX: 0,
          diffY: 0,
        });
      }}
      onResponderMove={(e) => {
        if (startPos !== null) {
          const diffX = Math.floor(startPos.x - e.nativeEvent.pageX);
          const diffY = Math.floor(startPos.y - e.nativeEvent.pageY);

          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > OFFSET_BEFORE_MOVE || diffX < -OFFSET_BEFORE_MOVE) {
              setIsMoving(true);
              handleMove(diffX);
            }
          } else {
            if (diffY > OFFSET_BEFORE_MOVE || diffY < -OFFSET_BEFORE_MOVE) {
              setIsMoving(true);
              handleMove(null, diffY);
            }
          }

          setStartPos({ ...startPos, diffX, diffY });
        }

        return true;
      }}
      onResponderRelease={() => {
        setIsMoving(false);
        setStartPos(null);
      }}
    >
      {children}
      {startPos && <Joystick startPos={startPos} />}
    </View>
  );
};

export default ControlsHandler;
