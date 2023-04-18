import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from './screens/dashboard';
import Register from './screens/register';


const { Navigator, Screen } = createBottomTabNavigator();

const Router: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'red',
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name='Listing'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='Register'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons
              name='attach-money'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='Resume'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons
              name='pie-chart'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}

export default Router;