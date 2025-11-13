// Reusable button component
import React from 'react';
import '../styles/buttons.css';

function Button({ label, onClick, type = 'primary' }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;