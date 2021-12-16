import React from 'react';
import { View } from 'react-native';

const OFFSET_BEFORE_MOVE = 20;

const ControlsHandler: React.FC<any> = ({ handleStateChange, children }) => {
  const [startPos, setStartPos] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isMoving, setIsMoving] = React.useState(false);
  const [movingDirection, setMovingDirection] = React.useState<string | null>(
    null
  );

  const handleMove = (diffX?: any, diffY?: any) => {
    // @TODO update hardcoded left, right and etc. to configurable in engine
    if (diffX !== null) {
      // Moving left
      if (diffX > 0) {
        setMovingDirection('left');
        // Moving right
      } else {
        setMovingDirection('right');
      }
    } else if (diffY !== null) {
      // Moving up
      if (diffY > 0) {
        setMovingDirection('up');
        // Moving down
      } else {
        setMovingDirection('down');
      }
    }
  };

  React.useEffect(() => {
    handleStateChange({ isMoving, movingDirection });
  }, [isMoving, movingDirection]);

  return (
    <View
      style={{ flex: 1 }}
      onStartShouldSetResponder={(e) => {
        setStartPos({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });

        return true;
      }}
      onResponderMove={(e) => {
        if (startPos !== null) {
          const diffX = Math.floor(startPos.x - e.nativeEvent.locationX);
          const diffY = Math.floor(startPos.y - e.nativeEvent.locationY);

          // @TODO make movement buffer before move contrallabe
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
        }
      }}
      onResponderEnd={() => {
        setIsMoving(false);
        setStartPos(null);
      }}
    >
      {children}
    </View>
  );
};

export default ControlsHandler;
