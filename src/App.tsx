import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Images/Quiz_game_image.jpeg';
import './App.css';

function App() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/homePage');
  }

  return (
    <div className="App">
      <div className="App" >
                <img src={logo} className="App-logo" alt="logo" />
                <button className="iniciar" onClick={navigateHome}>Inicie o Jogo</button>
        </div >
    </div>
  );
}


export default App;
