import axios from 'axios';


const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjgwYjNjMjBlZTAwYjJmZGRlNjQ4NGUzYzcyNzI3ZCIsInN1YiI6IjY2NGI2NGJjYTgyMzQ1ZjhlMGVkM2Y2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Thfbuy1hhMjcuTj5aXueOys5R6wrn3fuWC2rJ4VcctA';
const Base_url = 'https://api.themoviedb.org/3';
const Application = 'application/json'


const getInfoMovies = {
  getAllMovies: async (queries: any) => {
    const response = await axios.get(`${Base_url}/discover/movie`, {
      params: {
        language: "pt-br"
      },
      headers: {
        Authorization: API_KEY,
        Accept: Application
      },
    });
    return response.data.results;
  }
};




export default getInfoMovies;







// const tmdbService = {
//     getMovieCast: async (movieId: number) => {
//       const response = await axios.get(`${Base_url}/movie/${movieId}/credits`, {
//         params: {
//           api_key: API_KEY,
//           Accept: Accept
//         },
//       });
//       return response.data.cast;
//     },
//     searchMovies: async (query: string) => {
//       const response = await axios.get(`${Base_url}/search/movie`, {
//         params: {
//           api_key: API_KEY,
//           query: query,
//           Accept: Accept
//         },
//       });
//       return response.data.results;
//     },
//     getMovieDetails: async (movieId: number) => {
//       const response = await axios.get(`${Base_url}/movie/${movieId}`, {
//         params: {
//           api_key: API_KEY,
//           Accept: Accept
//         },
//       });
//       return response.data;
//     },
//   };