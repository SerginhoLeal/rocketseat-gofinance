import React, { useState } from 'react';
import { View } from 'react-native';

import * as Styles from './styles';

import { Button, Input, TransactionsTypeButton, CategorySelects } from '@common';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState('');

  const handleSetTransactionTypeSelect = (type: string) => {
    setTransactionType(type)
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Register</Styles.Title>
      </Styles.Header>

      <Styles.Form>
        <Styles.Fields>
          <Input placeholder='Name' />
          <Input placeholder='Price' />
          <Styles.TransactionType>
            <TransactionsTypeButton
              title='Income'
              type='up'
              isActive={transactionType === 'up'}
              onPress={() => handleSetTransactionTypeSelect('up')}
            />
            <TransactionsTypeButton
              title='Outcome'
              type='down'
              isActive={transactionType === 'down'}
              onPress={() => handleSetTransactionTypeSelect('down')}
            />
          </Styles.TransactionType>
        </Styles.Fields>
        <Button title='Send' />
      </Styles.Form>

    </Styles.Container>
  );
}

export default Register;