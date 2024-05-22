import React, { useEffect, useState } from "react";
import tmdbService from "../../Components/tmdbService";

const Genres = [
    {
        id: 28,
        title: 'Action',
        description: 'Action Movies',
        image: ''
    },
    {
        id: 12,
        title: 'Adventure',
        description: 'Adventure Movies',
        image: ''
    },
    {
        id: 16,
        title: 'Animation',
        description: 'Animation Movies',
        image: ''
    },
    {
        id: 35,
        title: 'Comedy',
        description: 'Comedy Movies',
        image: ''
    },
    {
        id: 80,
        title: 'Crime',
        description: 'Crime Movies',
        image: ''
    },
    {
        id: 99,
        title: 'Documentary',
        description: 'Documentary Movies',
        image: ''
    },
    {
        id: 18,
        title: 'Drama',
        description: 'Drama Movies',
        image: ''
    },
    {
        id: 10751,
        title: 'Family',
        description: 'Family Movies',
        image: ''
    },
    {
        id: 14,
        title: 'Fantasy',
        description: 'Fantasy Movies',
        image: ''
    },
    {
        id: 36,
        title: 'History',
        description: 'History Movies',
        image: ''
    },
    {
        id: 27,
        title: 'Horror',
        description: 'Horror Movies',
        image: ''
    },
    {
        id: 10402,
        title: 'Music',
        description: 'Music Movies',
        image: ''
    },
    {
        id: 9648,
        title: 'Mystery',
        description: 'Mystery Movies',
        image: ''
    },
    {
        id: 10749,
        title: 'Romance',
        description: 'Romance Movies',
        image: ''
    },
    {
        id: 878,
        title: 'Science Fiction',
        description: 'Science Fiction Movies',
        image: ''
    },
    {
        id: 10770,
        title: 'TV Movie',
        description: 'TV Movies',
        image: ''
    },
    {
        id: 53,
        title: 'Thriller',
        description: 'Thriller Movies',
        image: ''
    },
    {
        id: 10752,
        title: 'War',
        description: 'War Movies',
        image: ''
    },
    {
        id: 37,
        title: 'Western',
        description: 'Western Movies',
        image: ''
    }
];

const GenresWithImages = () => {
    const [genres, setGenres] = useState(Genres);

    useEffect(() => {
        const fetchImages = async () => {
            const newGenres = [...genres];
            for (let i = 0; i < newGenres.length; i++) {
                const movies = await tmdbService.getAllMovies({ with_genres: newGenres[i].id });
                if (movies && movies.length > 0) {
                    if(movies[0].genre_ids.includes(newGenres[i].id)){
                        newGenres[i].image = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movies[0].poster_path;
                    }
                }
            }
            setGenres(newGenres);
        };

        fetchImages();
    }, []);

    return genres;
};


export default GenresWithImages;