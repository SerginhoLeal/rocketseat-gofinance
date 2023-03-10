import React from 'react';
import { TextInputProps } from 'react-native';

import * as Styles from './styles';

type Props = TextInputProps;

export const Input: React.FC<Props> = ({ ...rest }: Props) => {
  return (
    <Styles.Container {...rest} />
  );
};
