import React, { useEffect, useState } from 'react';
import tmdbService from '../../Components/tmdbService'

// interface CastMember {
//   id: number;
//   name: string;
//   profile_path: string;
// }

// const QuizGame: React.FC = () => {
//   const [cast, setCast] = useState<CastMember[]>([]);
//   const [movieTitle, setMovieTitle] = useState<string>('');

//   useEffect(() => {
//     const fetchMovieData = async () => {
//       try {
//         const movies = await tmdbService.searchMovies('Inception'); 
//         const movie = movies[0];
//         setMovieTitle(movie.title);
//         const castData = await tmdbService.getMovieCast(movie.id);
//         setCast(castData);
//       } catch (error) {
//         console.error('Erro ao buscar dados do filme:', error);
//       }
//     };

//     fetchMovieData();
//   }, []);

//   return (
//     <div>
//       <h1>Quiz Game</h1>
//       <h2>{movieTitle}</h2>
//       <div>
//         {cast.map((member) => (
//           <div key={member.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
//               alt={member.name}
//             />
//             <p>{member.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizGame;
