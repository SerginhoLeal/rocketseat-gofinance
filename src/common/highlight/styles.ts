import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

import { StyleProps } from './type';

export const Container = styled.View<StyleProps>`
  width: ${RFValue(300)}px;

  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;

  ${({ theme, type }) => css`
    background-color: ${ type === 'total' ? theme.colors.secondary : theme.colors.shape };
  `};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<StyleProps>`
  font-size: ${RFValue(12)}px;

  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    color: ${ type === 'total' ? theme.colors.shape : theme.colors.text_dark };
  `};
`;

export const Icon = styled(Feather)<StyleProps>`
  font-size: ${RFValue(20)}px;

  ${({ theme, type }) => type === 'up' && css`
    color: ${theme.colors.success};
  `};

  ${({ theme, type }) => type === 'down' && css`
    color: ${theme.colors.attention};
  `};

  ${({ theme, type }) => type === 'total' && css`
    color: ${theme.colors.shape};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<StyleProps>`
  font-size: ${RFValue(32)}px;

  margin-top: 38px;

  ${({ theme, type}) => css`
    font-family: ${theme.fonts.medium};
    color: ${ type === 'total' ? theme.colors.shape : theme.colors.text_dark };
  `};
`;

export const LastTransaction = styled.Text<StyleProps>`
  font-size: ${RFValue(12)}px;

  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    color: ${ type === 'total' ? theme.colors.shape : theme.colors.text };
  `};
`;
