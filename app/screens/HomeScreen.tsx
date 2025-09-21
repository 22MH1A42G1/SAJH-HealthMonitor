import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SAJH Health Monitor</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Welcome to Your Health Dashboard</ThemedText>
        <ThemedText>
          Track your health, monitor symptoms, and stay on top of your wellness journey.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quick Health Stats</ThemedText>
        <ThemedText>
          • Daily water intake: 0/8 glasses
        </ThemedText>
        <ThemedText>
          • Medications taken: 0/2
        </ThemedText>
        <ThemedText>
          • Mental health check-in: Not done
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});