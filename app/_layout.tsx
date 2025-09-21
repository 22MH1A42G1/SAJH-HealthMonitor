import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import HealthApp from './HealthApp';

export const unstable_settings = {
  // Remove the anchor to allow our custom routing
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <HealthApp />
    </ThemeProvider>
  );
}
