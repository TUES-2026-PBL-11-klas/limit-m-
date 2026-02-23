import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView, //outdated but still works
} from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.shape1} />
        <View style={styles.shape2} />

        <View style={styles.titleSection}>
          <Text style={styles.title}>Screen Time</Text>
          <Text style={styles.tagline}>Track.Improve.</Text>
        </View> 

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    right: -200,
    width: 500,
    height: 500,
    borderRadius: 300,
    backgroundColor: '#2b2b2b',
    opacity: 0.5,

  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',//iskam bolder
    color: '#5ABE26',
    marginBottom: 10,
    top: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#8d8d8d',
    fontWeight: '500',
    top: 10,
  },
  buttonsSection: {
    width: '100%',
    alignItems: 'center',
  },

  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#5ABE26',
    paddingVertical: 16,
    borderRadius: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#000000',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LandingScreen;
