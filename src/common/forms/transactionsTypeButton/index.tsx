import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as Styles from './styles';

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
};

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
};

export const TransactionsTypeButton: React.FC<Props> = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Styles.Container isActive={isActive} type={type}>
      <Styles.Button {...rest}>
        <Styles.Icon name={icon[type]} type={type} />
        <Styles.Title>{title}</Styles.Title>
      </Styles.Button>
    </Styles.Container>
  );
};
