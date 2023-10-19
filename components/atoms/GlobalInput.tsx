import React from 'react';
import {TextInput, View} from 'react-native';

const GlobalInput = ({
  value,
  placeholder,
  action,
  style,
  editable,
  selectTextOnFocus,
}: any) => {
  return (
    <View className={style}>
      <TextInput
        onChangeText={action}
        placeholder={placeholder}
        value={value}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
      />
    </View>
  );
};

export default GlobalInput;
