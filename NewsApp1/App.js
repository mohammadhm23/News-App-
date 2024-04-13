import React from 'react';
import { View, Text } from 'react-native';
import NewsList from './NewsList';
import Search from './Search';

const App = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>News Mobile App</Text>
      <NewsList numberOfArticles={10} />
      <Search />
    </View>
  );
};

export default App;
