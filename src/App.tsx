import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Container } from './global/styles'
import Dashboard from './screens/dashboard'

import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme'
import React from 'react';

export default function AppIndex() {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <Container>
                <SafeAreaView />
                <Dashboard />
                <SafeAreaView />
            </Container>
        </ThemeProvider>
    )
}