import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { searchByKeyword, findByTitleOrAuthor } from './NewsService';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    const data = await searchByKeyword(keyword);
    setArticles(data);
  };

  const handleFind = async () => {
    const data = await findByTitleOrAuthor(keyword);
    setArticles(data);
  };

  return (
    <View>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Enter keyword or title/author"
      />
      <Button title="Search by Keyword" onPress={handleSearch} />
      <Button title="Find by Title/Author" onPress={handleFind} />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Search;
