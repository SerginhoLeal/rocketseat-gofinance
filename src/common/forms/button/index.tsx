import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
};

export const Button: React.FC<Props> = ({ title, ...rest }: Props) => {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  );
};
