import React from 'react';
import { View } from 'react-native';

import * as Styles from './styles';

interface Props {
  title: string;
};

export const CategorySelects: React.FC<Props> = ({ title }: Props) => {
  return (
    <Styles.Container>
      <Styles.Category>{title}</Styles.Category>
      <Styles.Icon name="chevron-down" />
    </Styles.Container>
  );
};
