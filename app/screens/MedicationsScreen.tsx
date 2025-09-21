import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  taken: boolean;
}

export default function MedicationsScreen() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: '1',
      name: 'Vitamin D',
      dosage: '1000 IU',
      frequency: 'Once daily',
      time: '9:00 AM',
      taken: false
    },
    {
      id: '2',
      name: 'Omega-3',
      dosage: '500mg',
      frequency: 'Twice daily',
      time: '9:00 AM, 6:00 PM',
      taken: false
    }
  ]);

  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: ''
  });

  const toggleMedicationTaken = (id: string) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  const addMedication = () => {
    if (!newMedication.name || !newMedication.dosage) {
      Alert.alert('Error', 'Please fill in at least medication name and dosage.');
      return;
    }

    const medication: Medication = {
      id: Date.now().toString(),
      name: newMedication.name,
      dosage: newMedication.dosage,
      frequency: newMedication.frequency || 'As needed',
      time: newMedication.time || 'Not specified',
      taken: false
    };

    setMedications([...medications, medication]);
    setNewMedication({ name: '', dosage: '', frequency: '', time: '' });
    Alert.alert('Success', 'Medication added successfully!');
  };

  const deleteMedication = (id: string) => {
    Alert.alert(
      'Delete Medication',
      'Are you sure you want to delete this medication?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => setMedications(medications.filter(med => med.id !== id))
        }
      ]
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#BA68C8', dark: '#7B1FA2' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Medications</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Today's Medications</ThemedText>
        {medications.map((medication) => (
          <ThemedView key={medication.id} style={styles.medicationCard}>
            <ThemedView style={styles.medicationHeader}>
              <ThemedText type="defaultSemiBold">{medication.name}</ThemedText>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteMedication(medication.id)}
              >
                <ThemedText style={styles.deleteText}>×</ThemedText>
              </TouchableOpacity>
            </ThemedView>
            <ThemedText>Dosage: {medication.dosage}</ThemedText>
            <ThemedText>Frequency: {medication.frequency}</ThemedText>
            <ThemedText>Time: {medication.time}</ThemedText>
            <TouchableOpacity 
              style={[
                styles.takenButton,
                medication.taken && styles.takenButtonActive
              ]}
              onPress={() => toggleMedicationTaken(medication.id)}
            >
              <ThemedText style={[
                styles.takenButtonText,
                medication.taken && styles.takenButtonTextActive
              ]}>
                {medication.taken ? '✓ Taken' : 'Mark as Taken'}
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ))}
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Add New Medication</ThemedText>
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Medication name"
            value={newMedication.name}
            onChangeText={(text) => setNewMedication({ ...newMedication, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Dosage (e.g., 500mg)"
            value={newMedication.dosage}
            onChangeText={(text) => setNewMedication({ ...newMedication, dosage: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Frequency (e.g., Twice daily)"
            value={newMedication.frequency}
            onChangeText={(text) => setNewMedication({ ...newMedication, frequency: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Time (e.g., 9:00 AM)"
            value={newMedication.time}
            onChangeText={(text) => setNewMedication({ ...newMedication, time: text })}
          />
          <TouchableOpacity style={styles.addButton} onPress={addMedication}>
            <ThemedText style={styles.addButtonText}>Add Medication</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.reminderSection}>
        <ThemedText type="subtitle">Medication Reminders</ThemedText>
        <ThemedText>• Set alarms for medication times</ThemedText>
        <ThemedText>• Keep medications in a visible location</ThemedText>
        <ThemedText>• Use a pill organizer for weekly planning</ThemedText>
        <ThemedText>• Never skip doses without consulting your doctor</ThemedText>
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
    marginBottom: 30,
    gap: 10,
  },
  medicationCard: {
    backgroundColor: 'rgba(186, 104, 200, 0.1)',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
  medicationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  takenButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  takenButtonActive: {
    backgroundColor: '#4CAF50',
  },
  takenButtonText: {
    color: '#666',
  },
  takenButtonTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#BA68C8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reminderSection: {
    backgroundColor: 'rgba(186, 104, 200, 0.05)',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
});