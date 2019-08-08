import React from 'react';
import Movies from './Movies';
import avatar from "./img/avatar.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";
import theblindside from "./img/theblindside.jpg";
import titanic from "./img/titanic.jpg";

export default function Gallery(){
    return (
        <>
        <div className="container">
        <Movies title="Avatar" img={avatar} />
        <Movies title="Black Panther" img={blackpanther} />
        <Movies title="Game of Throne" img={gameofthrone} />
      </div>
      <div className="container">
        <Movies title="Hobbs & Shaw" img={hobbsshaw} />
        <Movies title="The Blind Side" img={theblindside} />
        <Movies title="Titanic" img={titanic} />
      </div>
      </>
    );
}