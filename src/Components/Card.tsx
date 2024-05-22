import React from "react";
import { useNavigate } from "react-router-dom";
import '../Components/Card.css';
import GenresWithImages from "../Pages/Movies/Genres";


interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface CardProps {
    movie: Movie;
    buttonText: string;
    buttonLink: string;
}

const Card: React.FC<CardProps> = ({ movie, buttonText, buttonLink }) => {
    const navigate = useNavigate();
    
    const navigatePages = () => {
        navigate(buttonLink);
    }

    const { id, title, description, image } = movie;

    return (
        <div className="card">
            <div className="card-image">
                <h1>{id}</h1>
            </div>
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="Pages" onClick={navigatePages}>{buttonText}</button>
            </div>
        </div>
    );
};


export default Card;
