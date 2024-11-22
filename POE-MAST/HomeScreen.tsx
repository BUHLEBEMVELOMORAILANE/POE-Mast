import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MenuItemComponent from './MenuItemComponent';

interface HomeScreenProps {
  menu: Array<{ id: string; name: string; description: string; course: string; price: number }>;
  setSelectedCourse: (course: string) => void;
  removeMenuItem: (id: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ menu, setSelectedCourse, removeMenuItem }) => (
  <View style={styles.screen}>
    <Text style={styles.header}>Menu</Text>
    <View style={styles.filterContainer}>
      <Button title="All Dishes" onPress={() => setSelectedCourse('')} />
      <Button title="Starters" onPress={() => setSelectedCourse('Starter')} />
      <Button title="Main Dishes" onPress={() => setSelectedCourse('Main')} />
      <Button title="Desserts" onPress={() => setSelectedCourse('Dessert')} />
    </View>

    {menu.length === 0 ? (
      <Text style={styles.noMenuText}>No menu items available. Add a dish to get started!</Text>
    ) : (
      menu.map((item) => (
        <MenuItemComponent key={item.id} item={item} removeMenuItem={removeMenuItem} />
      ))
    )}
    <Text style={styles.totalItems}>Total Items: {menu.length}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial', // New font
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  noMenuText: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 16,
    textAlign: 'center',
  },
  totalItems: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0000FF',
  },
});

export default HomeScreen;
