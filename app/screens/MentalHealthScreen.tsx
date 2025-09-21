import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function MentalHealthScreen() {
  const [mood, setMood] = useState<number | null>(null);
  const [notes, setNotes] = useState('');
  const [stressLevel, setStressLevel] = useState<number | null>(null);

  const moodEmojis = ['😢', '😔', '😐', '🙂', '😊'];
  const moodLabels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  const stressEmojis = ['😌', '😊', '😐', '😰', '😱'];
  const stressLabels = ['Very Relaxed', 'Relaxed', 'Neutral', 'Stressed', 'Very Stressed'];

  const saveMoodEntry = () => {
    if (mood === null || stressLevel === null) {
      Alert.alert('Incomplete Entry', 'Please rate both your mood and stress level.');
      return;
    }

    Alert.alert(
      'Entry Saved',
      'Your mental health check-in has been saved. Remember to practice self-care!',
      [{ text: 'OK', style: 'default' }]
    );

    // Reset form
    setMood(null);
    setStressLevel(null);
    setNotes('');
  };

  const renderRatingScale = (
    title: string,
    emojis: string[],
    labels: string[],
    selectedValue: number | null,
    onSelect: (value: number) => void
  ) => (
    <ThemedView style={styles.ratingSection}>
      <ThemedText type="defaultSemiBold">{title}</ThemedText>
      <ThemedView style={styles.ratingContainer}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.ratingButton,
              selectedValue === index && styles.selectedRating
            ]}
            onPress={() => onSelect(index)}
          >
            <ThemedText style={styles.emoji}>{emoji}</ThemedText>
            <ThemedText style={styles.ratingLabel}>{labels[index]}</ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8BBD9', dark: '#C2185B' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mental Health</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Daily Check-in</ThemedText>
        <ThemedText>How are you feeling today? Take a moment to reflect on your mental state.</ThemedText>
      </ThemedView>

      {renderRatingScale(
        'How is your mood today?',
        moodEmojis,
        moodLabels,
        mood,
        setMood
      )}

      {renderRatingScale(
        'What is your stress level?',
        stressEmojis,
        stressLabels,
        stressLevel,
        setStressLevel
      )}

      <ThemedView style={styles.notesSection}>
        <ThemedText type="defaultSemiBold">Additional Notes (Optional)</ThemedText>
        <TextInput
          style={styles.notesInput}
          placeholder="How are you feeling? What's on your mind today?"
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </ThemedView>

      <TouchableOpacity style={styles.saveButton} onPress={saveMoodEntry}>
        <ThemedText style={styles.saveButtonText}>Save Check-in</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.tipsSection}>
        <ThemedText type="subtitle">Mental Health Tips</ThemedText>
        <ThemedText>• Practice deep breathing exercises</ThemedText>
        <ThemedText>• Stay connected with friends and family</ThemedText>
        <ThemedText>• Get regular physical exercise</ThemedText>
        <ThemedText>• Maintain a regular sleep schedule</ThemedText>
        <ThemedText>• Practice mindfulness or meditation</ThemedText>
        <ThemedText>• Limit social media if it affects your mood</ThemedText>
        <ThemedText>• Seek professional help when needed</ThemedText>
      </ThemedView>

      <ThemedView style={styles.emergencySection}>
        <ThemedText type="defaultSemiBold" style={styles.emergencyTitle}>
          🆘 Need Immediate Help?
        </ThemedText>
        <ThemedText>If you're having thoughts of self-harm or suicide:</ThemedText>
        <ThemedText style={styles.helplineText}>
          • Call 988 (Suicide & Crisis Lifeline)
        </ThemedText>
        <ThemedText style={styles.helplineText}>
          • Text "HELLO" to 741741 (Crisis Text Line)
        </ThemedText>
        <ThemedText>You are not alone. Help is available 24/7.</ThemedText>
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
  ratingSection: {
    marginBottom: 25,
    gap: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  ratingButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(248, 187, 217, 0.1)',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedRating: {
    backgroundColor: 'rgba(248, 187, 217, 0.3)',
    borderColor: '#F8BBD9',
  },
  emoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  ratingLabel: {
    fontSize: 10,
    textAlign: 'center',
  },
  notesSection: {
    marginBottom: 20,
    gap: 10,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    fontSize: 16,
    minHeight: 100,
  },
  saveButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsSection: {
    backgroundColor: 'rgba(248, 187, 217, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    gap: 8,
  },
  emergencySection: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    padding: 15,
    borderRadius: 10,
    gap: 5,
  },
  emergencyTitle: {
    color: '#D32F2F',
    fontSize: 16,
  },
  helplineText: {
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});