
import { StatusBar } from 'expo-status-bar';

import { Container } from './global/styles'
import Routes from './routes'

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme'
import React, { useContext } from 'react';
import { ThemeContext } from './providers/theme';

export default function AppIndex() {
    const {isDarkTheme} = useContext(ThemeContext)
    
    return (
        <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Routes />
            </Container>
        </StyledThemeProvider>
    )
}