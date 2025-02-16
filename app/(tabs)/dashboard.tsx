import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, useColorScheme } from 'react-native';
import { PaperProvider, DefaultTheme } from "react-native-paper";

import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomHeader from '../_header';
import CustomFooter from '../_footer';

import { Colors } from "../constants/Colors";

const DashboardScreen = () => {
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
      <CustomHeader Title="Dashboard"/>
        <View style={styles.centerPlaceholderIcon}>
          <Icon style={[styles.Icon, {color: CustomTheme.colors.primary}]} name="cloud-off" size={35} />
          <Text style={{color: CustomTheme.colors.primary}}>Not Available</Text>
        </View>
      <CustomFooter Current="Dashboard"/>
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
    fontSize: 80
  }
});

export default DashboardScreen;