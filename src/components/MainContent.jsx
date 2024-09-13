// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <div className="bg-gray-900 text-white p-6 flex-1 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold">Разблокируй челленджи и др.</h3>
          <p>Авторизируйся через Steam и выполняй простые задания</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Войти через Steam</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold">Skinchanger</h3>
          <p>Установи любые скины на любимое оружие!</p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4">Установить скин</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
