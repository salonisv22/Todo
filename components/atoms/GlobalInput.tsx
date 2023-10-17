import React from 'react';
import {TextInput, View} from 'react-native';

const GlobalInput = ({value, placeholder, action, style}: any) => {
  return (
    <View className={style}>
      <TextInput
        onChangeText={action}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

export default GlobalInput;
