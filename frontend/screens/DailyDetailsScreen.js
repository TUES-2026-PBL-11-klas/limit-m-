import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const DailyDetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.shape1} />

          <View style={styles.headerSection}>
            <Text style={styles.title}>Daily Details</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today</Text>
            <View style={styles.divider} />
            <Text style={styles.statText}>Total Time: 90 mins</Text>
            <Text style={styles.statText}>Pickups: 14</Text>
          </View>

          <View style={styles.backbuttonContainer}>
            <TouchableOpacity
              style={styles.backbutton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backbuttonText}>← Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  shape1: {
    position: 'absolute',
    bottom: -270,
    left: -80,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#143f14',
    opacity: 0.4,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#5ABE26',
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: 25,
    padding: 22,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    width: '100%',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginBottom: 15,
  },
  statText: {
    color: '#AAAAAA',
    fontSize: 16,
    marginBottom: 8,
  },
  backbuttonContainer: {
    marginTop: 'auto',
    marginBottom: 30,
    alignItems: 'center',
  },
  backbutton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5ABE26',
  },
  backbuttonText: {
    color: '#5ABE26',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DailyDetailsScreen;