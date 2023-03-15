import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View.attrs({ activeOpacity: 0.7 })`
  border-radius: 5px;
  padding: 18px 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
  `};
`;

export const CategoryButton = styled.TouchableOpacity`
  width: 100%;
  height: 23px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const IconList = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const CategoryModal = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `}
`;

export const Separator = styled.View`
  font-size: ${RFValue(14)}px;
  width: 100%;

  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;
