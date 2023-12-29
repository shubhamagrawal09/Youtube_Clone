import axios, * as others from 'axios';

const BASE_URL = "https://youtube-v311.p.rapidapi.com"

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "8a6f5c27c4mshf3256af1e9f538bp10b8e7jsn980a02cc4486",
      'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async(url) => {
   const reponse = await axios.get(`${BASE_URL}/${url}`, options);
   return reponse.data;
  }