import React from "react";
import "../HomePage/HomePage.css";
import Movies from '../Movies/Themes';
import Card from "../../Components/Card";

interface Props {}

const HomePage: React.FC<Props> = () => {
    return (
        <div className='CardTitles'>
            {Movies.map(movie => (
                <Card
                    key={movie.id}
                    movie={movie}
                    buttonText="Ver Mais"
                    buttonLink={`/movie/${movie.id}`}
                />
            ))}
        </div>
    );
};

export default HomePage;
