import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
};

export const TransactionsTypeButton: React.FC<Props> = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Styles.Container {...rest} isActive={isActive} type={type}>
      <Styles.Icon name={icon[type]} type={type} />
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  );
};
