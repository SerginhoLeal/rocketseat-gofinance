import React from 'react';

import { Highlight, Transaction } from '../../common';
import { DataListProps } from './type';

import * as Styles from './styles';

const data: DataListProps[] = [
  {
    id: '1',
    title:'Development',
    amount:'R$ 12.000,00',
    date:'15/02/2000',
    type: 'positive',
    category:{
      name: 'Sales',
      icon: 'dollar-sign'
    }
  },
  {
    id: '2',
    title:'Development',
    amount:'R$ 12.000,00',
    date:'15/02/2000',
    type: 'positive',
    category:{
      name: 'Sales',
      icon: 'dollar-sign'
    }
  },
  {
    id: '3',
    title:'Development',
    amount:'R$ 12.000,00',
    date:'15/02/2000',
    type: 'positive',
    category:{
      name: 'Sales',
      icon: 'dollar-sign'
    }
  }
];

const Dashboard = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.UserWrapper>
          <Styles.UserInfo>
            <Styles.Photo source={{ uri: 'https://i.pinimg.com/564x/24/93/37/249337f4c74030baa133c8d8315d7c03.jpg' }} />
            <Styles.User>
              <Styles.UserGreeting>Ola,</Styles.UserGreeting>
              <Styles.UserName>Sérgio</Styles.UserName>
            </Styles.User>
          </Styles.UserInfo>

          <Styles.LogoutButton onPress={() => {}}>
            <Styles.Icon name="power" />
          </Styles.LogoutButton>

        </Styles.UserWrapper>
      </Styles.Header>

      <Styles.HighlightCards>
        <Highlight key='1' title='Entradas' amount='5.200,00' lastTransaction='Ultima ...' type='up' />
        <Highlight key='2' title='Entradas' amount='5.200,00' lastTransaction='Ultima ...' type='down' />
        <Highlight key='3' title='Entradas' amount='5.200,00' lastTransaction='Ultima ...' type='total' />
      </Styles.HighlightCards>

      <Styles.Transactions>
        <Styles.Title>Listagem</Styles.Title>
        <Styles.TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Transaction data={item} />}
        />
      </Styles.Transactions>

    </Styles.Container>
  );
};

export default Dashboard;