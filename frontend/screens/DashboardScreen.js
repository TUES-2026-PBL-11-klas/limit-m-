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

const DashboardScreen = ({ navigation }) => {
  const [dailyUsage, setDailyUsage] = useState(90);
  const [dailyLimit, setDailyLimit] = useState(120);
  const [currentStreak, setCurrentStreak] = useState(5);
  const [profileButton, setProfileButton] = useState(false);//profile button

  const progress = Math.min((dailyUsage / dailyLimit) * 100, 100);

  const handleProfileButton = () => {
    console.log('Profile button pressed:', profileButton);//backend api
    setProfileButton(!profileButton);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.shape1} />

          <View style={styles.dashboardtitle}>
            <Text style={styles.title}>Dashboard</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today's screen time: {dailyUsage} minutes</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate('DailyDetails')}
            >
              <Text style={styles.detailsButtonText}>View details →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Daily limit</Text>
            
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
            </View>

            <Text style={dailyUsage <= dailyLimit ? styles.statusWithin : styles.statusOver}>
              {dailyUsage <= dailyLimit ? 'Within limit' : 'Over limit!'}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Current streak: {currentStreak} days</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate('HistoryScreen')}
            >
              <Text style={styles.detailsButtonText}>View history →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileButtonContainer}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate('ProfileScreen')}
              >
                <Text style={styles.profileButtonText}>Profile</Text>
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
    left: -75,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#143f14',
    opacity: 0.4,
  },
  dashboardtitle: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 42,
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
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  detailsButton: {
    marginTop: 5,
  },
  detailsButtonText: {
    color: '#5ABE26',
    fontSize: 15,
    fontWeight: 'bold',
  },
  progressBarBackground: {
    height: 14,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 7,
    marginVertical: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#5ABE26',
    borderRadius: 7,
  },
  statusWithin: {
    color: '#5ABE26',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusOver: {
    color: '#FF4C4C',
    fontSize: 14,
    fontWeight: 'bold',
  },

  profileButtonContainer: {
    marginTop: 'auto', 
    marginBottom: 100, 
    width: '80%',
    right: -25,
    top: -20,
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: '#5ABE26',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  profileButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DashboardScreen;