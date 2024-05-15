import React from "react";

interface CardProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

const Card = ({ title, description, image, buttonText, buttonLink }: CardProps) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a href={buttonLink}>{buttonText}</a>
            </div>
        </div>
    )
}