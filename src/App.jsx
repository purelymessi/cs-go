// src/App.jsx
import React from 'react';
import Sidebar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import GameModesList from './components/GameModesList.jsx';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
        <GameModesList />
      </div>
    </div>
  );
};

export default App;
