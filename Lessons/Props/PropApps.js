import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
// Diğer dosyadan import ediyoruz
import UserCard from './UserCard';

export default function PropApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ekip Listesi</Text>
      
      <ScrollView contentContainerStyle={styles.list}>
        {/* Farklı prop değerleri ile aynı bileşeni tekrar kullanıyoruz */}
        <UserCard name="Mehmet Yılmaz" age={28} job="UI Designer" />
        <UserCard name="Selin Kaya" age={32} job="Backend Developer" />
        <UserCard name="Mert Demir" age={24} job="Mobile Developer" />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    margin: 20,
    color: '#1a1a1a',
  },
  list: {
    paddingHorizontal: 20,
  },
});