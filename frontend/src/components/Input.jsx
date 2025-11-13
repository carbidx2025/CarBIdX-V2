// Reusable input component
import React from 'react';
import '../styles/forms.css';

function Input({ label, type = 'text', value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;