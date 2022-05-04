import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './layouts/Auth';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
