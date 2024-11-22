import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface MenuItemComponentProps {
  item: { id: string; name: string; description: string; course: string; price: number };
  removeMenuItem: (id: string) => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item, removeMenuItem }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>{item.course}</Text>
    <Text>R{item.price.toFixed(2)}</Text>
    <Button title="Remove" onPress={() => removeMenuItem(item.id)} color="#0000FF" />
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Arial', // New font
  },
});

export default MenuItemComponent;
