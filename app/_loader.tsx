import React from "react";
import { useColorScheme } from 'react-native';
import { ActivityIndicator, DefaultTheme } from 'react-native-paper';

import { Colors } from "./constants/Colors";

interface Props {
    isLoading: boolean
}

const CustomLoader:React.FC<Props> = ({ isLoading }) => {
    const colorScheme = useColorScheme();
    const CustomTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...Colors[colorScheme === 'dark' ? 'dark' : 'light']
        },
    };
    
    return <ActivityIndicator animating={isLoading} color={CustomTheme.colors.primary} />
};

export default CustomLoader;