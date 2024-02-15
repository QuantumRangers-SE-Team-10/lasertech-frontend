import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import App from './App.css';
import TestAPI from '../pages/testAPI';
import './onboarding.css';

const Onboarding = () => {
  const [players, setPlayers] = useState(Array.from(Array(20).keys()).map(() => ({ codename: '', idNumber: '' })));

  const handleCheckboxChange = (index) => {
    // Submit player's information when checkbox is clicked
    console.log("Submitted player:", players[index]);
  };

  return (
    <div className="window">
      <div className="window-header">
        <h2>Edit Current Game</h2>
      </div>
      <div className="window-content">
        <div className="columns">
          <div className="column">
            <h3>Red Team</h3>
            {players.map((player, index) => (
              <div key={index}>
                {index} <input
                  type="checkbox"
                  id={`red-team-${index}`}
                  name={`red-team-${index}`}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`red-team-${index}`}></label>
                <input
                  type="text"
                  id={`codename-${index}`}
                  name={`codename-${index}`}
                  value={player.codename}
                  onChange={(e) => setPlayers(players => {
                    const updatedPlayers = [...players];
                    updatedPlayers[index].codename = e.target.value;
                    return updatedPlayers;
                  })}
                  placeholder="Codename"
                />
                <input
                  type="number"
                  id={`idNumber-${index}`}
                  name={`idNumber-${index}`}
                  value={player.idNumber}
                  onChange={(e) => setPlayers(players => {
                    const updatedPlayers = [...players];
                    updatedPlayers[index].idNumber = e.target.value;
                    return updatedPlayers;
                  })}
                  placeholder="ID Number"
                />
              </div>
            ))}
          </div>
          <div className="column">
            <h3>Green Team</h3>
            {players.map((player, index) => (
              <div key={index}>
                {index} <input
                  type="checkbox"
                  id={`green-team-${index}`}
                  name={`green-team-${index}`}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`green-team-${index}`}></label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hotkeys">
        <button onClick={() => console.log("Edit Game")}>Edit Game</button>
        <button onClick={() => console.log("Game Parameters")}>Game Parameters</button>
        <button onClick={() => console.log("Start Game")}>Start Game</button>
        <button onClick={() => console.log("Preentered Games")}>Preentered Games</button>
        <button onClick={() => console.log("Clear Game")}>Clear Game</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Onboarding />
  </React.StrictMode>,
  document.getElementById('root')
);