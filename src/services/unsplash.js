import axios from 'axios';

// 1. Axios için Unsplash'e özel bir instance oluşturuyoruz
const unsplashInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    
    Authorization: 'Client-ID U27rwrFHGKLFOWtpfMQK7z5P0Jw7CTevlUwLxEupn3Y',
  },
});

// 2. Arama isteğini atacak fonksiyonumuz
const fetchImages = async (searchQuery, page = 1) => {
  const response = await unsplashInstance.get('/search/photos', {
    params: {
      query: searchQuery,
      page: page,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  
  return response.data;
};

export default fetchImages;