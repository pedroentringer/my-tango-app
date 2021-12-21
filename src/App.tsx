import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Container } from './global/styles'
import Dashboard from './screens/dashboard'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme'
import React, { useState } from 'react';

export default function AppIndex() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
            <Container>
                <SafeAreaView />
                <Dashboard />
                <SafeAreaView />
            </Container>
        </ThemeProvider>
    )
}