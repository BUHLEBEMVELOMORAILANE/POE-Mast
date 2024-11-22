import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import HomeScreen from './HomeScreen';
import AddMenuItemScreen from './AddMenuItemScreen';
import FilterScreen from './FilterScreen';

const App: React.FC = () => {
  const [menu, setMenu] = useState<Array<{ id: string; name: string; description: string; course: string; price: number }>>([]);
  const [screen, setScreen] = useState<'home' | 'add' | 'filter'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string>(''); 

  const addMenuItem = (item: { id: string; name: string; description: string; course: string; price: number }) => {
    setMenu([...menu, item]);
  };

  const removeMenuItem = (id: string) => {
    setMenu(menu.filter(item => item.id !== id));
  };

  const filteredMenu = selectedCourse
    ? menu.filter(item => item.course === selectedCourse)
    : menu;

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Chef's Menu</Text>
      <Navigation screen={screen} setScreen={setScreen} />
      {screen === 'home' ? (
        <HomeScreen menu={filteredMenu} setSelectedCourse={setSelectedCourse} removeMenuItem={removeMenuItem} /> 
      ) : screen === 'add' ? (
        <AddMenuItemScreen addMenuItem={addMenuItem} />
      ) : (
        <FilterScreen menu={menu} setSelectedCourse={setSelectedCourse} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
    minHeight: '100%',
    padding: 20,
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0000FF',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Arial', // New font
  },
});

export default App;
