import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, useColorScheme } from 'react-native';
import { PaperProvider, DefaultTheme } from "react-native-paper";

import CustomHeader from '../_header';
import CustomFooter from '../_footer';
import CustomLoader from '../_loader';

import { Colors } from "../constants/Colors";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const CustomTheme = {
      ...DefaultTheme,
      colors: {
          ...DefaultTheme.colors,
          ...Colors[colorScheme === 'dark' ? 'dark' : 'light']
      },
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },3000);
  },[]);

  return (
    <PaperProvider>
      <CustomHeader Title="Home"/>
        {isLoading ? <CustomLoader isLoading={isLoading}/> :
        <ScrollView style={[styles.scrollView, {backgroundColor: CustomTheme.colors.background}]}>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={[styles.text, {color: CustomTheme.colors.primary}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
        }
      <CustomFooter Current="Home"/>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  scrollView: {
    marginTop: 50,
    marginBottom: 50
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
});

export default HomeScreen