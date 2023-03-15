import React from 'react';
import { TextInputProps } from 'react-native';

import { Control, Controller } from 'react-hook-form';

import { Input } from '../forms';

import * as Styles from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string | any;
};

const InputForm: React.FC<InputFormProps> = ({
  control,
  name,
  error,
  ...rest
}: InputFormProps) => {
  return (
    <Styles.Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Container>
  );
}

export {
  InputForm,
  InputFormProps
};