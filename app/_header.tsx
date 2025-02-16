import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PaperProvider, DefaultTheme } from "react-native-paper";

import { Colors } from "./constants/Colors";
import { CustomButtonStyle } from "./constants/Buttons";

interface Props {
  Title: string;
}

const CustomHeader: React.FC<Props> = ({ Title }) => {
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
      <View style={styles.header}>
        <Text style={[styles.title, {color: CustomTheme.colors.primary}]}>{Title}</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
  },
  title: {
    color: 'rgb(0, 0, 0)',
    fontSize: 42,
    fontWeight: 'bold',
    marginLeft: 0,
  }
});

export default CustomHeader;