// Card container component
import React from 'react';
import '../styles/cards.css';

function Card({ children }) {
  return <div className="card">{children}</div>;
}


export default Card;
