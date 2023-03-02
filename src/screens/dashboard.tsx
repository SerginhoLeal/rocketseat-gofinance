import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import * as Styles from './styles';

const Dashboard: React.FC = () => {
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

          <Styles.Icon name="power" />

        </Styles.UserWrapper>
      </Styles.Header>
    </Styles.Container>
  );
};

export default Dashboard;