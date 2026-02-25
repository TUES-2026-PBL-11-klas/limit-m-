import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('gosho.petrov2gmail.com');
  const [password, setPassword] = useState('password123');
  const [limit, setLimit] = useState('300min');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.headerContainer}>
          <View style={styles.headerCapsule}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{'< Dashboard'}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>User</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Daily Limit</Text>
        <TextInput
          style={styles.input}
          value={limit}
          onChangeText={setLimit}
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Statistics</Text>
        <View style={styles.statsCard}>
          <Text style={styles.statsText}>
            Average screen time: <Text style={styles.greenText}>2h 10min</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.shape1} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 100,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerCapsule: {
    borderWidth: 2,
    borderColor: '#5ABE26',
    borderRadius: 50,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: '#5ABE26',
    fontSize: 32,
    fontWeight: '900',
  },
  backButton: {
    marginBottom: 30,
  },
  backText: {
    color: '#5ABE26',
    fontSize: 18,
    fontWeight: '600',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#333',
    marginBottom: 15,
  },
  statsCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#333',
    marginBottom: 30,
  },
  statsText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  greenText: {
    color: '#5ABE26',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#5ABE26',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '900',
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
});

export default ProfileScreen;