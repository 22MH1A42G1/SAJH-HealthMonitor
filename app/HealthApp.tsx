import CustomDrawer from '@/components/CustomDrawer';
import { ThemedText } from '@/components/themed-text';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import all screens
import HealthTipsScreen from '@/app/screens/HealthTipsScreen';
import HomeScreen from '@/app/screens/HomeScreen';
import MedicationsScreen from '@/app/screens/MedicationsScreen';
import MentalHealthScreen from '@/app/screens/MentalHealthScreen';
import NutritionGuideScreen from '@/app/screens/NutritionGuideScreen';
import SymptomCheckerScreen from '@/app/screens/SymptomCheckerScreen';
import WaterTrackingScreen from '@/app/screens/WaterTrackingScreen';

const screens = {
  Home: HomeScreen,
  WaterTracking: WaterTrackingScreen,
  NutritionGuide: NutritionGuideScreen,
  SymptomChecker: SymptomCheckerScreen,
  Medications: MedicationsScreen,
  MentalHealth: MentalHealthScreen,
  HealthTips: HealthTipsScreen,
};

const screenTitles = {
  Home: 'Home',
  WaterTracking: 'Water Tracking',
  NutritionGuide: 'Nutrition Guide',
  SymptomChecker: 'Symptom Checker',
  Medications: 'Medications',
  MentalHealth: 'Mental Health',
  HealthTips: 'Health Tips',
};

export default function HealthApp() {
  const [currentScreen, setCurrentScreen] = useState<keyof typeof screens>('Home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const colorScheme = useColorScheme();

  const CurrentScreenComponent = screens[currentScreen];

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen as keyof typeof screens);
    closeDrawer();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
        {/* Header with menu button */}
        <View style={[
          styles.header,
          { backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff' }
        ]}>
          <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
            <ThemedText style={styles.menuIcon}>☰</ThemedText>
          </TouchableOpacity>
          <ThemedText type="defaultSemiBold" style={styles.headerTitle}>
            {screenTitles[currentScreen]}
          </ThemedText>
          <View style={styles.placeholder} />
        </View>

        {/* Current Screen */}
        <View style={styles.content}>
          <CurrentScreenComponent />
        </View>

        {/* Custom Drawer */}
        <CustomDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          onNavigate={navigateToScreen}
          currentScreen={currentScreen}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
  menuIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  placeholder: {
    width: 36, // Same width as menu button to center the title
  },
  content: {
    flex: 1,
  },
});