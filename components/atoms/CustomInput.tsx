import React from 'react';
import {Controller} from 'react-hook-form';
import GlobalInput from './GlobalInput';

const CustomInput = ({
  style,
  control,
  name,
  rules = {},
  placeholder,
  editable = true,
  selectTextOnFocus = true,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}}) => (
        <GlobalInput
          style={style}
          value={value}
          action={onChange}
          placeholder={placeholder}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
        />
      )}
    />
  );
};

export default CustomInput;
