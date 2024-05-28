import React, { useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import Genres from "../Movies/Genres";
import Card from "../../Components/Card";

interface Props { }

const HomePage: React.FC<Props> = () => {


    return (
        <div className='CardTitles'>
            <p></p>
            {Genres.map(movie => (
                <Card
                    key={movie.id}
                    movie={movie}
                    buttonText="Jogar"
                    buttonLink={`/movie/${movie}`}
                />
            ))}
        </div>
    )
}

export default HomePage;
