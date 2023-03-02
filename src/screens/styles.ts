import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFPercentage(55)}px;
  height: ${RFPercentage(55)}px;

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

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `};
`;