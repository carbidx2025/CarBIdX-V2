import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page Placeholder</div>} />
      </Routes>
    </BrowserRouter>
  );
}
