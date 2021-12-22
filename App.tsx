import AppIndex from "./src/AppIndex";

import ThemeProvider from './src/providers/theme';
import LanguageProvider from './src/providers/language';

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AppIndex />
            </LanguageProvider>
        </ThemeProvider>
    )
}