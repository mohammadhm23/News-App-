import axios from 'axios';

const API_KEY = '341185dbe47ffbac3122e2223d08c7c1'; 
const BASE_URL = 'https://gnews.io/api/v4';

const fetchNews = async (numberOfArticles) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      token: API_KEY,
      lang: 'en',
      max: numberOfArticles,
    },
  });
  return response.data.articles;
};

const searchByKeyword = async (keyword) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      q: keyword,
      token: API_KEY,
      lang: 'en',
    },
  });
  return response.data.articles;
};

const findByTitleOrAuthor = async (titleOrAuthor) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      q: titleOrAuthor,
      token: API_KEY,
      lang: 'en',
    },
  });
  return response.data.articles;
};

export { fetchNews, searchByKeyword, findByTitleOrAuthor };
