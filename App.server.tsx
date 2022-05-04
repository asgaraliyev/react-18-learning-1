import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './layouts/Auth.server';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Main from './layouts/Main.server';
import Dashboard from './pages/main/Dashboard.server';
import Settings from './pages/main/Settings';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="main" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
