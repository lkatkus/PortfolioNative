import React from 'react';
import { Animated } from 'react-native';

import { ScreenWrapper } from '../../components';
import { LoadingOverlay } from './elements';

interface ScreenContainerProps {
  isLoaded?: boolean;
}

const MIN_LOADING_SCREEN_DURATION = 500;
const FADE_TRANSITION_DURATION = 200;

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  isLoaded,
  children,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const fadeAnimation = React.useRef(new Animated.Value(1)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: FADE_TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    // @TODO find a more elegant solution for displaying loading screen
    if (isLoaded) {
      setTimeout(() => {
        fadeOut();

        setTimeout(() => {
          setIsLoading(false);
        }, FADE_TRANSITION_DURATION);
      }, MIN_LOADING_SCREEN_DURATION);
    }
  }, [isLoaded]);

  return (
    <ScreenWrapper>
      {isLoading && <LoadingOverlay fadeAnimation={fadeAnimation} />}
      {children}
    </ScreenWrapper>
  );
};

export default ScreenContainer;
