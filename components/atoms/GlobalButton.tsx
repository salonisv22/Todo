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
  filled?: Boolean;
};
const GlobalButton = ({
  size,
  shape,
  border,
  action,
  text,
  filled = false,
}: Props) => {
  const shapeConfig = {
    rd: 'rounded-full w-[100] h-[100]',
    'rd-box': 'rounded-[24px]',
    box: '',
  };
  return (
    <View>
      <Pressable
        className={`border-${border} flex-row justify-center items-center ${
          shapeConfig[shape]
        } ${filled ? 'bg-slate-200' : ''}`}
        onPress={() => action()}>
        <Text className={`text-${size}`}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GlobalButton;
