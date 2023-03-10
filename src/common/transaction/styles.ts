import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { AmountProps } from './type';

export const Container = styled.View`
  border-radius: 5px;

  padding: 17px 24px;

  margin-bottom: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
  `};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `};
`;

export const Amount = styled.Text<AmountProps>`
  font-size: ${RFValue(20)}px;

  margin-top: 2px;

  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    color: ${ type === 'positive' ? theme.colors.success : theme.colors.attention};
  `};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;

  margin-left: 17px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const Date = styled.Text`
  font-size: ${RFValue(18)}px;

  margin-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `};
`;

