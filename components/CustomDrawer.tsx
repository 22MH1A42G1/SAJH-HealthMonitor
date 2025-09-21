import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import {
    Dimensions,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');
const DRAWER_WIDTH = screenWidth * 0.8;

interface DrawerItem {
  id: string;
  title: string;
  icon: string;
  screen: string;
}

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
  currentScreen: string;
}

const drawerItems: DrawerItem[] = [
  { id: 'home', title: 'Home', icon: '🏠', screen: 'Home' },
  { id: 'water', title: 'Water Tracking', icon: '💧', screen: 'WaterTracking' },
  { id: 'nutrition', title: 'Nutrition Guide', icon: '🥗', screen: 'NutritionGuide' },
  { id: 'symptoms', title: 'Symptom Checker', icon: '🩺', screen: 'SymptomChecker' },
  { id: 'medications', title: 'Medications', icon: '💊', screen: 'Medications' },
  { id: 'mental', title: 'Mental Health', icon: '🧠', screen: 'MentalHealth' },
  { id: 'tips', title: 'Health Tips', icon: '💡', screen: 'HealthTips' },
];

export default function CustomDrawer({ isOpen, onClose, onNavigate, currentScreen }: CustomDrawerProps) {
  const colorScheme = useColorScheme();
  const translateX = useSharedValue(-DRAWER_WIDTH);

  React.useEffect(() => {
    translateX.value = withTiming(isOpen ? 0 : -DRAWER_WIDTH, { duration: 300 });
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleItemPress = (screen: string) => {
    onNavigate(screen);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View style={[
              styles.drawer,
              animatedStyle,
              { backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff' }
            ]}>
              <ThemedView style={styles.header}>
                <ThemedText type="title" style={styles.headerTitle}>
                  SAJH Health Monitor
                </ThemedText>
              </ThemedView>

              <View style={styles.menuItems}>
                {drawerItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.menuItem,
                      currentScreen === item.screen && styles.activeMenuItem
                    ]}
                    onPress={() => handleItemPress(item.screen)}
                  >
                    <ThemedText style={styles.menuIcon}>{item.icon}</ThemedText>
                    <ThemedText style={[
                      styles.menuText,
                      currentScreen === item.screen && styles.activeMenuText
                    ]}>
                      {item.title}
                    </ThemedText>
                  </TouchableOpacity>
                ))}
              </View>

              <ThemedView style={styles.footer}>
                <ThemedText style={styles.footerText}>
                  Stay healthy, stay happy! 🌟
                </ThemedText>
              </ThemedView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItems: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  activeMenuItem: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  activeMenuText: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontStyle: 'italic',
    opacity: 0.7,
  },
});