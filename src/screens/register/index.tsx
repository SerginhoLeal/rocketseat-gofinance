import React, { useState } from 'react';
import { Alert, Keyboard, TouchableNativeFeedback } from 'react-native';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as Styles from './styles';

import { Button, TransactionsTypeButton, DropDown, InputForm } from '@common';

import { schema } from './constant';
import { FormData } from './type';

import { categories } from '../../utils/categories';

export default function Register(){
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState({ key: 'category', name: 'Category' });

  const handleSetTransactionTypeSelect = (type: string) => setTransactionType(type);

  const handleRegister = (form: FormData | any) => {
    if(!transactionType)
      return Alert.alert('Select transaction type');

    if(category.key === 'category')
      return Alert.alert('Select category');

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    };

    console.log(data);

  };

  return (
    // <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Register</Styles.Title>
      </Styles.Header>

      <Styles.Form>

        <Styles.Fields>

          <InputForm
            name='name'
            control={control}
            placeholder='Name'
            autoCorrect={false}
            autoCapitalize='sentences'
            error={errors?.name?.message}
          />

          <InputForm
            name='amount'
            control={control}
            placeholder='Price'
            keyboardType='numeric'
            error={errors?.amount?.message}
          />

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

          <DropDown
            title='Category'
            data={categories}
            onSelect={setCategory}
            onKeyboardDismiss={Keyboard.dismiss}
          />

        </Styles.Fields>

        <Button title='Send' onPress={handleSubmit(handleRegister)} />

      </Styles.Form>

    </Styles.Container>
  );
}
