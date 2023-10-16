import React, {useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, View} from 'react-native';

const CustomInput = ({control, name, rules = {}, placeholder}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}}) => (
        <View>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
          />
        </View>
      )}
    />
  );
};

export default CustomInput;
