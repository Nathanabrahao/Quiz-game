import React, { useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import GenresWithImages from "../Movies/Genres";
import Card from "../../Components/Card";

interface Props { }

const HomePage: React.FC<Props> = () => {
    const genres = GenresWithImages() 

    return (
        <div className='CardTitles'>
            <p></p>
            {genres.map(movie => (
                <Card
                    key={movie.id}
                    movie={movie}
                    buttonText="Ver Mais"
                    buttonLink={`/movie/${movie.id}`}
                />
            ))}
        </div>
    )
}   

export default HomePage;
