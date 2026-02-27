import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const HistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerCapsule}>
          <Text style={styles.headerText}>History</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.backText}>{'< Dashboard'}</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Weekly Usage:</Text>
          <Text style={styles.monthLabel}>{'< January 2026'}</Text>
          
          <View style={styles.chartArea}>
            <View style={styles.baseline} />
            
            <View style={styles.barContainer}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const heights = [120, 95, 140, 110, 130, 85, 0];
                
                return (
                  <View key={day + index} style={styles.dayColumn}>
                    <View style={styles.barTrack}>
                      {index !== 6 && (
                        <View style={[styles.barFill, { height: heights[index] }]} />
                      )}
                    </View>
                    <Text style={styles.dayLabel}>{day}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Statistics</Text>
          <View style={styles.statsGrid}>
            
            <View style={styles.statItem}>
              <View style={styles.valueContainer}>
                <Text style={styles.statValue}>45h 35min</Text>
                <View style={styles.underline} />
              </View>
              <Text style={styles.statLabel}>Weekly Avrg</Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.valueContainer}>
                <Text style={styles.statValue}>1h 35min</Text>
                <View style={styles.underline} />
              </View>
              <Text style={styles.statLabel}>Daily Avrg</Text>
            </View>

          </View>
        </View>

      </ScrollView>

      <View style={styles.bottomShape} pointerEvents="none" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#000000',
    zIndex: 10,
  },
  headerCapsule: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: '#5ABE26',
    fontSize: 32,
    fontWeight: '900',
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 100,
  },
  backButton: {
    marginBottom: 35,
    marginTop: 10,
  },
  backText: {
    color: '#5ABE26',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#333',
  },
  cardHeader: {
    color: '#888',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  monthLabel: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 10,
  },
  chartArea: {
    height: 180,
    marginTop: 10,
    position: 'relative',
  },
  baseline: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    height: 1.5,
    backgroundColor: '#555',
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  dayColumn: {
    alignItems: 'center',
    width: 25,
  },
  barTrack: {
    flex: 1,
    width: 10,
    justifyContent: 'flex-end', 
    paddingBottom: 10,
  },
  barFill: {
    width: '100%',
    backgroundColor: '#5ABE26',
    borderRadius: 5,
  },
  dayLabel: {
    color: '#888',
    fontSize: 14,
    marginTop: 15,
    fontWeight: '500',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  valueContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  underline: {
    height: 1.5,
    backgroundColor: '#FFFFFF',
    width: '105%',
    marginTop: 4,
  },
  statLabel: {
    color: '#AAAAAA',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomShape: {
    position: 'absolute',
    bottom: -150,
    alignSelf: 'center',
    width: 600,
    height: 300,
    borderRadius: 300,
    backgroundColor: '#143f14',
    opacity: 0.3,
    zIndex: -1,
  },
});

export default HistoryScreen;