import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import MenuItemComponent from './MenuItemComponent';

interface FilterScreenProps {
  menu: Array<{ id: string; name: string; description: string; course: string; price: number }>;
}

const FilterScreen: React.FC<FilterScreenProps> = ({ menu }) => {
  const [selectedCourse, setSelectedCourse] = useState('All');

  // Filter the menu based on the selected course
  const filteredMenu = menu.filter((item) => {
    if (selectedCourse === 'All') return true;
    return item.course === selectedCourse;
  });

  const removeMenuItem = (id: string) => {
    // Logic to remove item goes here
    console.log(`Removing item with id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <View style={styles.filterButtons}>
        <Button title="All" onPress={() => setSelectedCourse('All')} />
        <Button title="Starter" onPress={() => setSelectedCourse('Starter')} />
        <Button title="Main" onPress={() => setSelectedCourse('Main')} />
        <Button title="Dessert" onPress={() => setSelectedCourse('Dessert')} />
      </View>
      <FlatList
        data={filteredMenu}
        renderItem={({ item }) => <MenuItemComponent item={item} removeMenuItem={removeMenuItem} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for better contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0000FF', // Blue color for the title
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default FilterScreen;

