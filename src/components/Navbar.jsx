import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-4 space-y-6">
      <div className="flex items-center space-x-3">
        <img src="logo.svg" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">1153 Игроков онлайн</span>
      </div>
      
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-play text-yellow-400"></i>
          <span>Играть</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-challenges"></i>
          <span>Челленджи</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-pass"></i>
          <span>Боевой пропуск</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-store"></i>
          <span>Магазин</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-skinchanger"></i>
          <span>Skinchanger</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-wallet"></i>
          <span>Копилка</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-announcements"></i>
          <span>Объявления</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-faq"></i>
          <span>FAQ</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <i className="icon-blog"></i>
          <span>Блог</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
