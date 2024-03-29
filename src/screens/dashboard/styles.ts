import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

import { DataListProps } from './type';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Photo = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
  `};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.bold};
  `};
`;

export const LogoutButton = styled(BorderlessButton)`

`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{
    paddingHorizontal: 24
  }
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1%;

  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `};
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle:{
    paddingBottom: getBottomSpace()
  }
})``;