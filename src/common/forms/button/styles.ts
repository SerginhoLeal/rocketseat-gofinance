import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  
  border-radius: 5px;
  padding: 18px;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.medium};
  `};
`;
