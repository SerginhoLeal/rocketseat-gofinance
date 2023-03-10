import React from 'react';
import * as Styles from './styles';

import { HighlightProps } from './type';
import { icon } from './constants';

export type HighlightComponentProps = HighlightProps;

export const Highlight: React.FC<HighlightProps> = ({
  amount,
  title,
  lastTransaction,
  type
}: HighlightProps) => {
  return (
    <Styles.Container type={type}>
      <Styles.Header>
        <Styles.Title type={type}>{title}</Styles.Title>
        <Styles.Icon name={icon[type]} type={type} />
      </Styles.Header>

      <Styles.Footer>
        <Styles.Amount type={type}>R$ {amount}</Styles.Amount>
        <Styles.LastTransaction type={type}>R$ {lastTransaction}</Styles.LastTransaction>
      </Styles.Footer>
    </Styles.Container>
  );
};
