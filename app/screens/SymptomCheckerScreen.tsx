import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function SymptomCheckerScreen() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Sore Throat', 'Fatigue',
    'Nausea', 'Dizziness', 'Chest Pain', 'Shortness of Breath',
    'Stomach Pain', 'Joint Pain', 'Skin Rash'
  ];

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const checkSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      Alert.alert('No Symptoms Selected', 'Please select at least one symptom to check.');
      return;
    }

    const isSerious = selectedSymptoms.some(symptom => 
      ['Chest Pain', 'Shortness of Breath', 'Severe Headache'].includes(symptom)
    );

    if (isSerious) {
      Alert.alert(
        'Seek Medical Attention', 
        'Based on your symptoms, please consult a healthcare professional immediately.',
        [{ text: 'OK', style: 'default' }]
      );
    } else {
      Alert.alert(
        'General Advice', 
        'Monitor your symptoms and consider rest, hydration, and over-the-counter remedies. If symptoms persist or worsen, consult a healthcare provider.',
        [{ text: 'OK', style: 'default' }]
      );
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFB74D', dark: '#F57C00' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Symptom Checker</ThemedText>
      </ThemedView>

      <ThemedView style={styles.disclaimerContainer}>
        <ThemedText style={styles.disclaimer}>
          ⚠️ This tool is for informational purposes only and should not replace professional medical advice.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Select Your Symptoms</ThemedText>
        <ThemedView style={styles.symptomsGrid}>
          {commonSymptoms.map((symptom, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.symptomButton,
                selectedSymptoms.includes(symptom) && styles.selectedSymptom
              ]}
              onPress={() => toggleSymptom(symptom)}
            >
              <ThemedText style={[
                styles.symptomText,
                selectedSymptoms.includes(symptom) && styles.selectedSymptomText
              ]}>
                {symptom}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>

      {selectedSymptoms.length > 0 && (
        <ThemedView style={styles.selectedContainer}>
          <ThemedText type="defaultSemiBold">Selected Symptoms:</ThemedText>
          <ThemedText>{selectedSymptoms.join(', ')}</ThemedText>
        </ThemedView>
      )}

      <TouchableOpacity style={styles.checkButton} onPress={checkSymptoms}>
        <ThemedText style={styles.checkButtonText}>Check Symptoms</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.emergencyContainer}>
        <ThemedText type="defaultSemiBold" style={styles.emergencyTitle}>
          🚨 Emergency Signs
        </ThemedText>
        <ThemedText>If you experience any of these, seek immediate medical attention:</ThemedText>
        <ThemedText>• Severe chest pain or pressure</ThemedText>
        <ThemedText>• Difficulty breathing</ThemedText>
        <ThemedText>• Sudden severe headache</ThemedText>
        <ThemedText>• Loss of consciousness</ThemedText>
        <ThemedText>• Signs of stroke (F.A.S.T.)</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  disclaimerContainer: {
    backgroundColor: 'rgba(255, 183, 77, 0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  disclaimer: {
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  symptomsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  symptomButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedSymptom: {
    backgroundColor: '#FFB74D',
    borderColor: '#F57C00',
  },
  symptomText: {
    fontSize: 14,
  },
  selectedSymptomText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedContainer: {
    backgroundColor: 'rgba(255, 183, 77, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    gap: 5,
  },
  checkButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emergencyContainer: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    padding: 15,
    borderRadius: 10,
    gap: 5,
  },
  emergencyTitle: {
    color: '#D32F2F',
  },
});