import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { API_BASE_URL } from '../config';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {

  try {
    const API_URL = `${API_BASE_URL}/user/register`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

  } catch (error) {
    console.error('Registration error:', error);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.shape1} />
          <View style={styles.shape2} />

          <View style={styles.titleSection}>
            <Text style={styles.title}>Screen Time</Text>
            <Text style={styles.tagline}>Track.Improve.</Text>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Create an account</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#AAAAAA"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#AAAAAA"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.loginPrompt}>
              <Text style={styles.loginPromptText}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  shape1: {
    position: 'absolute',
    top: -130,
    left: -200,
    width: 500,
    height: 500,
    borderRadius: 300,
    backgroundColor: '#143f14',
    opacity: 0.5,
  },
  shape2: {
    position: 'absolute',
    bottom: -150,
    right: -220,
    width: 500,
    height: 500,
    borderRadius: 300,
    backgroundColor: '#2b2b2b',
    opacity: 0.5,

  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#5ABE26',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#8d8d8d',
    fontWeight: '500',
  },
  formSection: {
    width: '100%',
    alignItems: 'center',
  },
  formTitle: {
    color: '#dcdcdc',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
  },
  registerButton: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    marginTop: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginPrompt: {
    alignItems: 'center',
  },
  loginPromptText: {
    color: '#8d8d8d',
    fontSize: 14,
    marginBottom: 12,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#5ABE26',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterScreen;
