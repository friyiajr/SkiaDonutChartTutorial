import React, {FC, useTransition} from 'react';

import {
  Canvas,
  Circle,
  DiscretePathEffect,
  Paint,
  Path,
  runTiming,
  Skia,
  SkiaMutableValue,
  useValue,
  Text,
  useFont,
  SkFont,
} from '@shopify/react-native-skia';
import {View, StyleSheet, Easing, Button} from 'react-native';

interface CircularProgressProps {
  strokeWidth: number;
  radius: number;
  backgroundColor: string;
  percentageComplete: SkiaMutableValue<number>;
  font: SkFont;
}

export const DonutChart: FC<CircularProgressProps> = ({
  strokeWidth,
  radius,
  percentageComplete,
  font,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  return (
    <View style={styles.container}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          color="lightblue"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={percentageComplete}
        />
        <Text
          x={innerRadius - strokeWidth * 4}
          y={radius + strokeWidth}
          text={'H'}
          font={font}
          size={32}
        />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
