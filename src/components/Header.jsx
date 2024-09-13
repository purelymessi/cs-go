// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="space-x-6">
        <a href="#" className="hover:text-yellow-400">Roulette</a>
        <a href="#" className="hover:text-yellow-400">Jackpot</a>
        <a href="#" className="hover:text-yellow-400">Dice</a>
        <a href="#" className="hover:text-yellow-400">Coinflip</a>
        <a href="#" className="hover:text-yellow-400">Case Unboxing</a>
      </nav>
      <div className="space-x-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">Войти через Steam</button>
      </div>
    </header>
  );
};

export default Header;
