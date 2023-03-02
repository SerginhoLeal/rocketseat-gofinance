import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from "./src/global/styles/theme";

import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';

import Dashboard from "@screens/dashboard";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular: require('./assets/fonts/Poppins-Regular.ttf'),
    Poppins_500Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    Poppins_700Bold: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if(!fontsLoaded){
    return null;
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </SafeAreaView>
  );
};
