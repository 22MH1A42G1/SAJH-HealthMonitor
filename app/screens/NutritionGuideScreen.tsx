import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function NutritionGuideScreen() {
  const nutritionTips = [
    {
      category: 'Fruits & Vegetables',
      description: 'Aim for 5-9 servings per day',
      examples: 'Apples, spinach, carrots, berries, broccoli'
    },
    {
      category: 'Whole Grains',
      description: 'Choose whole grains over refined grains',
      examples: 'Brown rice, quinoa, oats, whole wheat bread'
    },
    {
      category: 'Lean Proteins',
      description: 'Include protein in every meal',
      examples: 'Fish, chicken, beans, tofu, eggs, nuts'
    },
    {
      category: 'Healthy Fats',
      description: 'Essential for brain and heart health',
      examples: 'Avocados, olive oil, nuts, seeds, fatty fish'
    },
    {
      category: 'Dairy/Alternatives',
      description: 'For calcium and vitamin D',
      examples: 'Milk, yogurt, cheese, fortified plant milks'
    }
  ];

  return (
    <ParallaxScrollView
      headerImage={<ThemedView style={{ flex: 1, backgroundColor: '#81C784' }} />}
      headerBackgroundColor={{ light: '#81C784', dark: '#388E3C' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nutrition Guide</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Daily Nutrition Goals</ThemedText>
        <ThemedText>Follow these guidelines for a balanced diet:</ThemedText>
      </ThemedView>

      {nutritionTips.map((tip, index) => (
        <ThemedView key={index} style={styles.tipCard}>
          <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>
            {tip.category}
          </ThemedText>
          <ThemedText style={styles.description}>{tip.description}</ThemedText>
          <ThemedText style={styles.examples}>Examples: {tip.examples}</ThemedText>
        </ThemedView>
      ))}

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">General Tips</ThemedText>
        <ThemedText>• Eat regular meals and healthy snacks</ThemedText>
        <ThemedText>• Stay hydrated throughout the day</ThemedText>
        <ThemedText>• Limit processed foods and added sugars</ThemedText>
        <ThemedText>• Practice portion control</ThemedText>
        <ThemedText>• Listen to your body&apos;s hunger cues</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Meal Planning</ThemedText>
        <ThemedText>
          Plan your meals ahead of time to ensure balanced nutrition and avoid 
          impulsive food choices. Include a variety of colors and food groups 
          in each meal.
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
  tipCard: {
    backgroundColor: 'rgba(129, 199, 132, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    gap: 5,
  },
  categoryTitle: {
    fontSize: 18,
    color: '#388E3C',
  },
  description: {
    fontStyle: 'italic',
  },
  examples: {
    fontSize: 12,
    opacity: 0.8,
  },
});