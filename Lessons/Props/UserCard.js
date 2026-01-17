import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ name, age, job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>Yaş: {age}</Text>
      <Text style={styles.details}>Meslek: {job}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    // Gölge ayarları
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  details: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
});

export default UserCard;