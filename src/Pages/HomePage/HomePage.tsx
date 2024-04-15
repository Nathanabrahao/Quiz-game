import React from "react";
import logo from '../../Images/Quiz_game_image.jpeg';
import Movies from "../../Images/greatest-movies-of-all-time;jpg.avif"
import "../HomePage/HomePage.css"
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface Props { }


const HomePage = (props: Props) => {
    return (
        <div className="App" >
            <img src={logo} className="App-logo homePage_logo" alt="logo" />
            <div className="card_div">
                <Card className="card" >
                    <Card.Img variant="top" className="Image_movies" src={Movies} style={{ width: '480px', height: '180px' }} />
                    <Card.Body>
                        <Card.Title>Filmes</Card.Title>
                        <Card.Text>
                            Descobra o filme baseado no elenco interpretado.
                        </Card.Text>
                        <Button variant="primary">Jogar</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card_div">
                <Card className="card" >
                    <Card.Img variant="top" className="Image_movies" src={Movies} style={{ width: '480px', height: '180px' }} />
                    <Card.Body>
                        <Card.Title>Filmes</Card.Title>
                        <Card.Text>
                            Descobra o filme baseado no elenco interpretado.
                        </Card.Text>
                        <Button variant="primary">Jogar</Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}



export default HomePage;