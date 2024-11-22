import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavigationProps {
  screen: 'home' | 'add' | 'filter';
  setScreen: (screen: 'home' | 'add' | 'filter') => void;
}

const Navigation: React.FC<NavigationProps> = ({ screen, setScreen }) => (
  <View style={styles.nav}>
    <TouchableOpacity onPress={() => setScreen('home')}>
      <Text style={[styles.navButton, screen === 'home' && styles.activeButton]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScreen('add')}>
      <Text style={[styles.navButton, screen === 'add' && styles.activeButton]}>Add Menu Item</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScreen('filter')}>
      <Text style={[styles.navButton, screen === 'filter' && styles.activeButton]}>Filter Menu</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navButton: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#0000FF',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0000FF',
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    fontFamily: 'Arial', // New font
  },
  activeButton: {
    backgroundColor: '#0000FF',
    color: '#fff',
  },
});

export default Navigation;

