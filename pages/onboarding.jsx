import { useState } from 'react';
import { addPlayer } from '../api/player';

import '/src/css/onboarding.css';

const Onboarding = () => {
  const [redTeamPlayers, setRedTeamPlayers] = useState(Array.from(Array(20).keys()).map(() => ({ codename: '', idNumber: '' })));
  const [greenTeamPlayers, setGreenTeamPlayers] = useState(Array.from(Array(20).keys()).map(() => ({ codename: '', idNumber: '' })));

  const handleRedTeamChange = (index, field, value) => {
    const updatedRedTeamPlayers = [...redTeamPlayers];
    if(field === 'idNumber' && value !== '' && !/^\d*$/.test(value)) {
      console.log("Invalid ID Number");
      return;
    }
    updatedRedTeamPlayers[index][field] = value;
    setRedTeamPlayers(updatedRedTeamPlayers);
  };

  const handleGreenTeamChange = (index, field, value) => {
    const updatedGreenTeamPlayers = [...greenTeamPlayers];
    if(field === 'idNumber' && value !== '' && !/^\d*$/.test(value)) {
      console.log("Invalid ID Number");
      return;
    }
    updatedGreenTeamPlayers[index][field] = value;
    setGreenTeamPlayers(updatedGreenTeamPlayers);
  };

  const handleClearGame = () => {
    setRedTeamPlayers(Array.from(Array(20).keys()).map(() => ({ codename: '', idNumber: '' })));
    setGreenTeamPlayers(Array.from(Array(20).keys()).map(() => ({ codename: '', idNumber: '' })));
  }

  const handleSubmit = async () => {
    const players = [...redTeamPlayers, ...greenTeamPlayers];

    const filteredPlayers = players
      .filter((player) => player.idNumber !== '' && player.codename !== '');
    
    filteredPlayers.forEach(async (player) => {
      await addPlayer(player.idNumber, player.codename);
    });

    console.log(filteredPlayers);
  };

  return (
    <div className="window">
      <div className="window-header">
        <h2>Edit Current Game</h2>
      </div>
      <div className="window-content">
        <div className="columns">
          <div className="column">
            <h3 style={{ color: 'red' }}>Red Team</h3>
            {redTeamPlayers.map((player, index) => (
              <div key={index}>
                <input
                  type="number"
                  value={player.idNumber}
                  onChange={(e) => handleRedTeamChange(index, 'idNumber', e.target.value)}
                  placeholder="ID Number"
                  
                />
                <input
                  type="text"
                  value={player.codename}
                  onChange={(e) => handleRedTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                />
              </div>
            ))}
          </div>
          <div className="column">
            <h3 style={{ color: 'green' }}>Green Team</h3>
            {greenTeamPlayers.map((player, index) => (
              <div key={index}>
                <input
                  type="number"
                  value={player.idNumber}
                  onChange={(e) => handleGreenTeamChange(index, 'idNumber', e.target.value)}
                  placeholder="ID Number"
                />
                <input
                  type="text"
                  value={player.codename}
                  onChange={(e) => handleGreenTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hotkeys">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => console.log("Start Game")}>Start Game</button>
        <button onClick={handleClearGame}>Clear Game</button>
      </div>
    </div>
  );
};

export default Onboarding;