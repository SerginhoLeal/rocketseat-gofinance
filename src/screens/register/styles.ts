import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;

  justify-content: space-between;

  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionType = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
`;
