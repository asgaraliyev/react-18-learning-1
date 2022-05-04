import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './layouts/Auth';
import Register from './pages/Register';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
