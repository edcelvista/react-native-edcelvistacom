import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from "./constants/Colors";
import { CustomButtonStyle } from "./constants/Buttons";

interface Props {
  Current: string
};

const CustomFooter: React.FC<Props> = ({Current}) => {
  const colorScheme = useColorScheme();
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors[colorScheme === 'dark' ? 'dark' : 'light']
    },
  };

  return (
    <PaperProvider>
      <View style={styles.navContainer}>
        <View style={styles.inlineContainer}>
          <Link style={styles.navLink} href="/(tabs)/home"><Icon color={Current.toLocaleLowerCase() === "home" ? CustomTheme.colors.tertiary : CustomTheme.colors.primary } name="home" size={28} /></Link>
          <Link style={styles.navLink} href="/(tabs)/dashboard"><Icon color={Current.toLocaleLowerCase() === "dashboard" ? CustomTheme.colors.tertiary : CustomTheme.colors.primary }  name="dashboard" size={28} /></Link>
          <Link style={styles.navLink} href="/(tabs)/settings"><Icon color={Current.toLocaleLowerCase() === "settings" ? CustomTheme.colors.tertiary : CustomTheme.colors.primary }  name="miscellaneous-services" size={28} /></Link>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    flex: 1,
    paddingVertical: 15,
    height: 80
  },
  inlineContainer: {
    flexDirection: 'row', // Makes children (Text + Link) inline
    alignItems: 'center', // Aligns items vertically
  },
  navLink: {
    marginTop: 28,
    marginLeft: 34,
    marginRight: 34
  }
});

export default CustomFooter;