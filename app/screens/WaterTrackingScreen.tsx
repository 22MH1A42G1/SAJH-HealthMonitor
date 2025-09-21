import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function WaterTrackingScreen() {
  const [waterGlasses, setWaterGlasses] = useState(0);
  const dailyGoal = 8;

  const addWater = () => {
    if (waterGlasses < dailyGoal) {
      setWaterGlasses(waterGlasses + 1);
      if (waterGlasses + 1 === dailyGoal) {
        Alert.alert('Congratulations!', 'You\'ve reached your daily water goal!');
      }
    }
  };

  const removeWater = () => {
    if (waterGlasses > 0) {
      setWaterGlasses(waterGlasses - 1);
    }
  };

  return (
    <ParallaxScrollView
      headerImage={<ThemedView style={{ flex: 1, backgroundColor: '#4FC3F7' }} />}
      headerBackgroundColor={{ light: '#4FC3F7', dark: '#0277BD' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Water Tracking</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.statsContainer}>
        <ThemedText type="subtitle">Today&apos;s Progress</ThemedText>
        <ThemedText style={styles.progressText}>
          {waterGlasses} / {dailyGoal} glasses
        </ThemedText>
        <ThemedView style={styles.progressBarContainer}>
          <ThemedView style={[styles.progressBar, { width: `${(waterGlasses / dailyGoal) * 100}%` }]} />
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addWater}>
          <ThemedText style={styles.buttonText}>+ Add Glass</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={removeWater}>
          <ThemedText style={styles.buttonText}>- Remove Glass</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.tipContainer}>
        <ThemedText type="subtitle">Hydration Tips</ThemedText>
        <ThemedText>• Drink a glass of water when you wake up</ThemedText>
        <ThemedText>• Set reminders throughout the day</ThemedText>
        <ThemedText>• Eat water-rich fruits and vegetables</ThemedText>
        <ThemedText>• Drink before, during, and after exercise</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4FC3F7',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4FC3F7',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#FF7043',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tipContainer: {
    gap: 8,
  },
});