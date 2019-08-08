import React from "react";
import avatar from "./img/avatar.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";
import theblindside from "./img/theblindside.jpg";
import titanic from "./img/titanic.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img src={avatar} alt="Avatar Movie Cover" />
          <div className='overlay'><h1>Avatar</h1></div>
        </div>
        <div className="item">
          <img src={blackpanther} alt="Black Panther Movie Cover" />
          <div className='overlay'><h1>Black Panther</h1></div>
        </div>
        <div className="item">
          <img src={gameofthrone} alt="Game of Throne Movie Cover" />
          <div className='overlay'><h1>Game of Thrown</h1></div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={hobbsshaw} alt="Hobbs & Shaw Movie Cover" />
          <div className='overlay'><h1>Hobbs & Shaw</h1></div>
        </div>
        <div className="item">
          <img src={theblindside} alt="The Blind Spot Movie Cover" />
          <div className='overlay'><h1>The Blind Spot</h1></div>
        </div>
        <div className="item">
          <img src={titanic} alt="Titanic Movie Cover" />
          <div className='overlay'><h1>Titanic</h1></div>
        </div>
      </div>
    </div>
  );
}

export default App;
