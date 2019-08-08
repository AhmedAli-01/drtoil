import React from 'react';

export default function Movies(props) {
    return (
      <div className="item">
        <img src={props.img} alt={`${props.title} logo` } />
        <div className="overlay">
          <h1>{props.title}</h1>
        </div>
      </div>
    );
  }