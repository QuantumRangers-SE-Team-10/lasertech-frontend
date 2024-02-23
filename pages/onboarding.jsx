import { useState } from 'react';
import { addPlayer } from '../api/player';

import '/src/css/onboarding.css';

const Onboarding = () => {
  const [playerID,setPlayerID] = useState('');
  const [redTeamPlayers, setRedTeamPlayers] = useState(Array.from(Array(20).keys()).map(() => ({ codename: '', playerID: '', equipmentId: '' })));
  const [greenTeamPlayers, setGreenTeamPlayers] = useState(Array.from(Array(20).keys()).map(() => ({ codename: '', playerID: '', equipmentId: '' })));
  const [selectedTeam, setSelectedTeam] = useState('Red');
  const [codename, setCodename] = useState('');
  const [redteamindex, setRedTeamIndex] = useState(0); 
  const [greenteamindex, setGreenTeamIndex] = useState(0); 
  const [equipmentId, setEquipmentId] = useState('');




  const setEquipmentID = (index, value, team) => {
    
    if (!value || !/^\d+$/.test(value)) {
      console.log("Invalid equipment ID");
      setEquipmentId('');
      return;
    }
  
    
    const updatedPlayers = team === 'Red' ? [...redTeamPlayers] : [...greenTeamPlayers];
  
    
    updatedPlayers[index] = {
      ...updatedPlayers[index], 
      equipmentId: value 
    };
  
    
    if (team === 'Red') {
      setRedTeamPlayers(updatedPlayers);
    } else if (team === 'Green'){
      setGreenTeamPlayers(updatedPlayers);
    }

    setEquipmentId('');
  };

  const handleClearGame = () => {
    setRedTeamPlayers(Array.from(Array(20).keys()).map(() => ({ codename: '', playerID: '', equipmentId: ''})));
    setGreenTeamPlayers(Array.from(Array(20).keys()).map(() => ({ codename: '', playerID: '', equipmentId: ''})));
    setRedTeamIndex(0);
    setGreenTeamIndex(0);
    
  };


  const handleSubmitPlayer = async() => {
    if (!playerID || !codename) {
      console.log("Invalid player");
      return;
    }
    const newPlayer = { playerID, codename };
    if (selectedTeam === 'Red') {
      if (redteamindex !== -1) {
        const updatedRedTeamPlayers = [...redTeamPlayers];
        updatedRedTeamPlayers[redteamindex] = newPlayer; // Update existing player
        setRedTeamPlayers(updatedRedTeamPlayers);
        setRedTeamIndex(redteamindex+1);
      } else {
        console.log("Player not found in the Red Team");
      }
    } else if (selectedTeam === 'Green') {
      if (greenteamindex !== -1) {
        const updatedGreenTeamPlayers = [...greenTeamPlayers];
        updatedGreenTeamPlayers[greenteamindex] = newPlayer; // Update existing player
        setGreenTeamPlayers(updatedGreenTeamPlayers);
        setGreenTeamIndex(greenteamindex+1);
      } else {
        console.log("Player not found in the Green Team");
      }
    }
  
    // Clear input fields after submission
    setPlayerID('');
    setCodename('');
  };

  const getCodename = async (playerID) => {
    const response = await fetch(`/api/player/${playerID}`);
    const data = await response.json();
    return data.codename;
  };

  const updateCodeName = async (playerID) => {
    if (!playerID) {
      return;
    }
    try {
      const existingCodename = await getCodename(playerID);
      if (existingCodename) {
        setCodename(existingCodename);
      }
    }catch (error) {
      console.log("Error fetching codename: ", error);
    }
  }

 

  const handleSubmit = async () => {
    const players = [...redTeamPlayers, ...greenTeamPlayers];

    const filteredPlayers = players
      .filter((player) => player.playerID !== '' && player.codename !== '');
    
    filteredPlayers.forEach(async (player) => {
      await addPlayer(player.playerID, player.codename);
    });

    console.log(filteredPlayers);
  };

  return (
    <div className="window">
      <div className="window-header">
        <h2>Edit Current Game</h2>
      </div>
      <div className="window-content">
        <div> 
          <h3> Add Player</h3>
          <input
          type = "text"
          value = {playerID}
          onChange={(e) => {
          setPlayerID(e.target.value);
          updateCodeName(e.target.value);
          } }
          placeholder="Player ID"
          />
          <input
          type = "text"
          value = {codename}
          onChange={(e) => setCodename(e.target.value)}
          placeholder="Codename"
          />
          
          <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
            <option value="Red">Add Player to Red Team</option>
            <option value="Green">Add Player to Green Team</option>
          </select>
          <button onClick={handleSubmitPlayer}>Add Player to Roster</button>
        </div>
        <div className="columns">
          <div className="column">
            <h3 style={{ color: 'red' }}>Red Team</h3>
            {redTeamPlayers.map((player, index) => (
              <div key={index}>
                <input
                  type="number"
                  value={player.playerID}
                  readOnly
                  //onChange={(e) => handleRedTeamChange(index, 'playerID', e.target.value)}
                  placeholder="ID Number"
                />
                <input
                  type="text"
                  value={player.codename}
                  readOnly
                 // onChange={(e) => handleRedTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                />
                <input
                type="text"
                value={player.equipmentId}
                onChange={(e) => {
                  const newValue = e.target.value;
                  const equipmentIdValue = parseInt(newValue);
                  if (isNaN(equipmentIdValue)) {
                  setEquipmentId(newValue);
                  return;
                  }
                  setEquipmentId(newValue);
                  setTimeout(() => {
                  if (selectedTeam === 'Red' && equipmentIdValue % 2 === 0) {
                    console.log(`Invalid Equipment ID for Green Team`);
                    setEquipmentId('');
                    }
                  }, 1000);
                  }}
                placeholder="Equipment ID"
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
                  value={player.playerID}
                  readOnly
                  //onChange={(e) => handleGreenTeamChange(index, 'playerID', e.target.value)}
                  placeholder="ID Number"
                />
                <input
                  type="text"
                  value={player.codename}
                  readOnly
                  //onChange={(e) => handleGreenTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                />
                <input
                 type="text"
                 value={player.equipmentId}
                 onChange={(e) => {
                  const newValue = e.target.value;
                  const equipmentIdValue = parseInt(newValue);
                  if (isNaN(equipmentIdValue)) {
                  setEquipmentId(newValue);
                  return;
                  }
                  setEquipmentId(newValue);
                  setTimeout(() => {
                  if (selectedTeam === 'Green' && equipmentIdValue % 2 !== 0) {
                    console.log(`Invalid Equipment ID for Green Team`);
                    setEquipmentId('');
                    }
                  }, 1000);
                  }}
                 placeholder="Equipment ID"
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