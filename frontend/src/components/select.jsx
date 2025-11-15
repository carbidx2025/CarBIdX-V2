// Reusable select component
import React from 'react';
import '../styles/forms.css';

function Select({ label, options = [], value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
