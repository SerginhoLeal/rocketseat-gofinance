import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as Styles from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
};

export const Button: React.FC<Props> = ({ title, onPress, ...rest }: Props) => {
  return (
    <Styles.Container onPress={onPress} {...rest}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  );
};
