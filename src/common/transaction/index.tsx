import React from 'react';

import * as Styles from './styles';
import { TransactionProps, TransactionDataProps } from './type';

export type TransactionDataComponentProps = TransactionDataProps;

export const Transaction: React.FC<TransactionProps> = ({ data }: TransactionProps) => {
  return (
    <Styles.Container>
      <Styles.Title>{data.title}</Styles.Title>

      <Styles.Amount type={data.type}>
        {data.type === 'negative' && '-'}
        {data.amount}
      </Styles.Amount>

      <Styles.Footer>
        <Styles.Category>
          <Styles.Icon name='dollar-sign' />
          <Styles.CategoryName>{data.category.name}</Styles.CategoryName>
        </Styles.Category>
        <Styles.Date>{data.date}</Styles.Date>
      </Styles.Footer>
    </Styles.Container>
  );
}
