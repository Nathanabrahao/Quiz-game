import axios from 'axios';


const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjgwYjNjMjBlZTAwYjJmZGRlNjQ4NGUzYzcyNzI3ZCIsInN1YiI6IjY2NGI2NGJjYTgyMzQ1ZjhlMGVkM2Y2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Thfbuy1hhMjcuTj5aXueOys5R6wrn3fuWC2rJ4VcctA';
const Base_url = 'https://api.themoviedb.org/3';



const getInfoMovies = {
  getAllMovies: async () => {
    const response = await axios.get(`${Base_url}/discover/movie`, {
      params: {
        language: "pt-br"
      },
      headers: {
        Authorization: API_KEY,
        Application: 'application/json'
      },
    });
    return response.data.results;
  }
};




export default getInfoMovies;

