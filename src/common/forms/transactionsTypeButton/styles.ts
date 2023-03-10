import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProp {
  type: 'up' | 'down';
};

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  padding: 16px;

  ${({ theme, isActive, type }) => css`
    border: ${isActive ? 0 : 1.5}px solid ${theme.colors.text};

    ${isActive && type === 'up' && css`background-color: ${theme.colors.success_light};`};
    ${isActive && type === 'down' && css`background-color: ${theme.colors.attention_light};`};
  `};
`;

export const Icon = styled(Feather)<IconProp>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  ${({ theme, type }) => css`
    color: ${type === 'up' ? theme.colors.success : theme.colors.attention};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
  `};
  font-size: ${RFValue(14)}px;
`;
