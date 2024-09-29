import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import FlatCard from './components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
