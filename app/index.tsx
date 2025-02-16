import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { PaperProvider, Button, Text, DefaultTheme } from 'react-native-paper';
import { router } from 'expo-router';

import { Colors } from "./constants/Colors";
import { CustomButtonStyle } from "./constants/Buttons";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors[colorScheme === 'dark' ? 'dark' : 'light']
    },
  };
  
  const loginClick = () => {
    router.push('/(tabs)/home', { relativeToDirectory: true });
  };

  return (
    <PaperProvider theme={CustomTheme}>
      <View style={styles.screenLabelContainer}>
        <Text style={[styles.screenLabelContainerText, {color: CustomTheme.colors.primary}]}>Hello!</Text>
        <Text style={[styles.screenLabelContainerText2, {color: CustomTheme.colors.primary}]}>edcelvistacom</Text>
      </View>
      <Button textColor={CustomTheme.colors.onPrimary} buttonColor={CustomTheme.colors.primary} contentStyle={{flexDirection: 'row-reverse'}} icon="login" onPress={loginClick} mode="elevated" style={CustomButtonStyle.buttonGeneric}>Login</Button>
      <Button textColor={CustomTheme.colors.onPrimary} buttonColor={CustomTheme.colors.primary} contentStyle={{flexDirection: 'row-reverse'}} icon="arrow-right-thin" onPress={loginClick} mode="elevated" style={CustomButtonStyle.buttonGeneric}>Create Account</Button>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  screenLabelContainer: {
    height: '50%',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenLabelContainerText: {
    fontSize: 69,
    fontWeight: 800
  },
  screenLabelContainerText2: {
    fontSize: 24,
    fontWeight: 100
  },
  text: {
    fontSize: 12,
    padding: 12
  }
});

export default HomeScreen