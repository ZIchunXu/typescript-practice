import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './pages/TodoList';
import Home from './pages/HomePage';
import UserPage from './pages/UserPage';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
