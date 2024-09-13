// src/components/GameModesList.jsx
import React from 'react';

const GameModesList = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Game Modes</h2>
      <div className="space-y-4">
        <div className="text-2xl">Retake <span className="text-sm text-gray-400">508</span></div>
        <div className="text-2xl">Deathmatch <span className="text-sm text-gray-400">195</span></div>
        <div className="text-2xl">5x5 <span className="text-sm text-gray-400">109</span></div>
      </div>
    </div>
  );
};

export default GameModesList;
