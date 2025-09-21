import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

export default function HealthTipsScreen() {
  const healthTips = [
    {
      category: 'Exercise & Fitness',
      icon: '🏃‍♂️',
      tips: [
        'Aim for at least 150 minutes of moderate exercise per week',
        'Take the stairs instead of elevators when possible',
        'Try to stand and move for 5 minutes every hour',
        'Include both cardio and strength training in your routine'
      ]
    },
    {
      category: 'Sleep & Rest',
      icon: '😴',
      tips: [
        'Aim for 7-9 hours of sleep per night',
        'Keep a consistent sleep schedule',
        'Avoid screens 1 hour before bedtime',
        'Create a relaxing bedtime routine'
      ]
    },
    {
      category: 'Stress Management',
      icon: '🧘‍♀️',
      tips: [
        'Practice deep breathing exercises daily',
        'Try meditation or mindfulness apps',
        'Take regular breaks from work',
        'Connect with friends and family regularly'
      ]
    },
    {
      category: 'Preventive Care',
      icon: '🩺',
      tips: [
        'Schedule regular check-ups with your doctor',
        'Keep up with recommended screenings',
        'Get vaccinated according to guidelines',
        'Know your family medical history'
      ]
    },
    {
      category: 'Hygiene & Safety',
      icon: '🧼',
      tips: [
        'Wash hands frequently for 20 seconds',
        'Use sunscreen with SPF 30+ daily',
        'Brush teeth twice daily and floss',
        'Wear seatbelts and helmets when appropriate'
      ]
    }
  ];

  const openHealthResource = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#90CAF9', dark: '#1976D2' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Health Tips</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Daily Health Habits</ThemedText>
        <ThemedText>Small daily actions can lead to significant health improvements over time.</ThemedText>
      </ThemedView>

      {healthTips.map((category, index) => (
        <ThemedView key={index} style={styles.categoryCard}>
          <ThemedView style={styles.categoryHeader}>
            <ThemedText style={styles.categoryIcon}>{category.icon}</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>
              {category.category}
            </ThemedText>
          </ThemedView>
          {category.tips.map((tip, tipIndex) => (
            <ThemedText key={tipIndex} style={styles.tipText}>
              • {tip}
            </ThemedText>
          ))}
        </ThemedView>
      ))}

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Weekly Health Goals</ThemedText>
        <ThemedView style={styles.goalCard}>
          <ThemedText>✅ Drink 8 glasses of water daily</ThemedText>
          <ThemedText>✅ Exercise for 30 minutes, 5 times a week</ThemedText>
          <ThemedText>✅ Eat 5 servings of fruits and vegetables daily</ThemedText>
          <ThemedText>✅ Get 7-8 hours of sleep each night</ThemedText>
          <ThemedText>✅ Practice stress-reduction techniques</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.resourcesSection}>
        <ThemedText type="subtitle">Helpful Resources</ThemedText>
        <TouchableOpacity 
          style={styles.resourceButton}
          onPress={() => openHealthResource('https://www.cdc.gov/healthyliving/index.html')}
        >
          <ThemedText style={styles.resourceText}>CDC Healthy Living Guidelines</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.resourceButton}
          onPress={() => openHealthResource('https://www.who.int/news-room/fact-sheets')}
        >
          <ThemedText style={styles.resourceText}>WHO Health Fact Sheets</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.resourceButton}
          onPress={() => openHealthResource('https://www.mayoclinic.org/healthy-lifestyle')}
        >
          <ThemedText style={styles.resourceText}>Mayo Clinic Healthy Living</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.reminderSection}>
        <ThemedText type="defaultSemiBold">Remember:</ThemedText>
        <ThemedText>
          These tips are for general wellness. Always consult with healthcare 
          professionals for personalized medical advice and before making 
          significant changes to your health routine.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    gap: 8,
  },
  categoryCard: {
    backgroundColor: 'rgba(144, 202, 249, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    gap: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryTitle: {
    fontSize: 18,
    color: '#1976D2',
  },
  tipText: {
    marginLeft: 10,
    lineHeight: 20,
  },
  goalCard: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
  resourcesSection: {
    marginBottom: 20,
    gap: 10,
  },
  resourceButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  resourceText: {
    color: 'white',
    fontWeight: '500',
  },
  reminderSection: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
});