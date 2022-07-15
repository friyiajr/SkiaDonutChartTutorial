import {runTiming, useValue, Easing, useFont} from '@shopify/react-native-skia';
import React from 'react';
import {Button, PixelRatio, StyleSheet, View} from 'react-native';
import {DonutChart} from './DonutChart';

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 10;

const App = () => {
  const targetPercentage = 85 / 100;
  const animationState = useValue(0);

  const animateChart = () => {
    animationState.current = 0;
    runTiming(animationState, targetPercentage, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  const font = useFont(require('./Roboto-Light.ttf'), 16);

  if (!font) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.ringChartContainer}>
        <DonutChart
          backgroundColor="purple"
          radius={radius}
          strokeWidth={STROKE_WIDTH}
          percentageComplete={animationState}
          font={font}
        />
      </View>
      <Button title="Animate" onPress={animateChart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringChartContainer: {
    width: radius * 2,
    height: radius * 2,
  },
});

export default App;
