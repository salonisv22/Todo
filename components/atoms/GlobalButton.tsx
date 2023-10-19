import React from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonShape = 'rd-box' | 'box' | 'rd';

type Props = {
  size: ButtonSize;
  shape: ButtonShape;
  border: number;
  action: () => void;
  text: string;
};
const GlobalButton = ({size, shape, border, action, text}: Props) => {
  const shapeConfig = {};
  return (
    <View>
      <Pressable
        className={`border-${border} flex-row justify-center items-center rounded-[24px]`}
        onPress={() => action()}>
        <Text className={`text-${size}`}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GlobalButton;
