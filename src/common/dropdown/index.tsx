import React from 'react';
import { Animated, FlatList, LayoutAnimation, Keyboard } from 'react-native';

import * as Styles from './styles';

import { toggleAnimation } from './constants';

interface Props {
  data: Array<any>
  title: string;
  onSelect: (item: any) => void;
  onKeyboardDismiss: () => void;
};

export const DropDown: React.FC<Props> = ({ data, title, onSelect, onKeyboardDismiss }: Props) => {
  const [showContent, setShowContent] = React.useState(false);
  const [categorySelected, setCategorySelected] = React.useState(title);

  const animationModal = React.useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true
    };

    Animated.timing(animationModal, config).start();
    LayoutAnimation.configureNext(toggleAnimation);

    setShowContent(!showContent);
    onKeyboardDismiss()
  };

  const arrowTransform = animationModal.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg']
  });

  return (
    <Styles.Container>
      <Styles.CategoryButton onPress={toggleListItem}>
        <Styles.Category>{categorySelected || title}</Styles.Category>

        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <Styles.Icon name="chevron-down" />
        </Animated.View>
      </Styles.CategoryButton>

      {showContent && (
        <FlatList
          data={data}
          style={{
            width: '100%',
            height: '48%',
            overflow: 'hidden',
          }}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Styles.CategoryModal onPress={() => {
              setCategorySelected(item.name)
              toggleListItem()
              onSelect(item)
            }}>
              <Styles.IconList name={item.icon} />
              <Styles.Name>{item.name}</Styles.Name>
            </Styles.CategoryModal>
          )}
          ItemSeparatorComponent={() => <Styles.Separator />}
        />
      )}
    </Styles.Container>
  );
};
