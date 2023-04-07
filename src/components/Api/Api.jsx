import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const featchImages = async (search, pageNum) => {
  const KEY = '33515786-5b52176933b5882b00b6da0a7';
  const response = await axios.get('', {
    params: {
      key: KEY,
      q: search,
      page: pageNum,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });

  return response.data;
};
