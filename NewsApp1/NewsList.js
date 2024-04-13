import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { fetchNews } from './NewsService';

const NewsList = ({ numberOfArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(numberOfArticles).then((data) => {
      setArticles(data);
    });
  }, [numberOfArticles]);

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => alert(item.url)}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NewsList;
