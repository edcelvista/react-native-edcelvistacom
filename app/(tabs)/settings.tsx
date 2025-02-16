import { StyleSheet, useColorScheme } from 'react-native';
import { PaperProvider, Button, DefaultTheme } from "react-native-paper";
import { router } from 'expo-router';

import CustomHeader from '../_header';
import CustomFooter from '../_footer';

import { Colors } from "../constants/Colors";
import { CustomButtonStyle } from "../constants/Buttons";

const SettingsScreen = () => {
  const colorScheme = useColorScheme();
  const CustomTheme = {
      ...DefaultTheme,
      colors: {
          ...DefaultTheme.colors,
          ...Colors[colorScheme === 'dark' ? 'dark' : 'light']
      },
  };

  const logoutClick = () => {
    router.navigate('/', { relativeToDirectory: true });
  };

  return (
    <PaperProvider>
      <CustomHeader Title="Settings"/>
      <PaperProvider>
        <Button textColor={CustomTheme.colors.onPrimary} buttonColor={CustomTheme.colors.primary} icon="information-outline" onPress={logoutClick} mode="elevated" style={CustomButtonStyle.buttonGeneric}>Notice & Aggrements</Button>
        <Button textColor={CustomTheme.colors.onPrimary} buttonColor={CustomTheme.colors.primary} icon="account-cog" onPress={logoutClick} mode="elevated" style={CustomButtonStyle.buttonGeneric}>Account Management</Button>
        <Button textColor={CustomTheme.colors.onPrimary} buttonColor={CustomTheme.colors.primary} contentStyle={{flexDirection: 'row-reverse'}} icon="logout" onPress={logoutClick} mode="elevated" style={CustomButtonStyle.buttonGeneric}>Logout</Button>
      </PaperProvider>
      <CustomFooter Current="Settings"/>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  centerPlaceholderIcon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Icon: {
    fontSize: 80,
    color: 'rgb(122,122,122)'
  }
});

export default SettingsScreen;