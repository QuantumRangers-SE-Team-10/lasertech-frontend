import { useState } from "react";
import { addPlayer, getPlayer } from "../api/player";

import "/src/css/onboarding.css";

const Onboarding = () => {
  const [playerID, setPlayerID] = useState("");
  const [redTeamPlayers, setRedTeamPlayers] = useState(
    Array.from(Array(20).keys()).map(() => ({
      codename: "",
      playerID: "",
      equipmentId: "",
    }))
  );
  const [greenTeamPlayers, setGreenTeamPlayers] = useState(
    Array.from(Array(20).keys()).map(() => ({
      codename: "",
      playerID: "",
      equipmentId: "",
    }))
  );
  const [selectedTeam, setSelectedTeam] = useState("Red");
  const [codename, setCodename] = useState("");
  const [redteamindex, setRedTeamIndex] = useState(0);
  const [greenteamindex, setGreenTeamIndex] = useState(0);
  const [equipmentId, setEquipmentId] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showCodeName, setShowCodeName] = useState(false);
  const [isAddButtonDisabled, setAddButtonDisabled] = useState(true);
  // const [fetchedCodename, setFetchedCodename] = useState('');

  const handleEquipmentIdChange = (e, team, index) => {
    const value = e.target.value;
    validateEquipmentId(value, team, index);
  };

  const handleBlur = (e, team, index) => {
    const value = e.target.value;
    validateEquipmentId(value, team, index);
  };

  const fetchCodename = async (playerID) => {
    try {
      const player = await getPlayer(playerID);
      if (player.codename) {
        // setFetchedCodename(player.codename);
        setCodename(player.codename);
        setShowCodeName(true);
      } else {
        // setFetchedCodename('');
        setCodename("");
        setShowCodeName(true);
      }
    } catch (error) {
      console.error("Error fetching codename:", error);
      setShowCodeName(true); // Show the input field for manual entry
      // setCodename(''); // Reset codename state
    }
    console.log("Codename: ", playerID);
    setAddButtonDisabled(false);
  };

  const getBorderColor = (player) => {
    if (player.equipmentId === "") {
      return "gray"; // Empty box or invalid equipment ID
    } else if (player.equipmentId !== "" && player.isValid) {
      return "green"; // Valid equipment ID
    } else {
      return "red"; // Invalid equipment ID
    }
  };

  const validateEquipmentId = (value, team, index) => {
    const equipmentIdValue = parseInt(value);
    const isValid =
      !isNaN(equipmentIdValue) &&
      ((team === "Green" && equipmentIdValue % 2 === 0) ||
        (team === "Red" && equipmentIdValue % 2 !== 0));
    if (team === "Red") {
      const updatedPlayers = [...redTeamPlayers];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        equipmentId: value,
        isValid,
      };
      setRedTeamPlayers(updatedPlayers);
    } else if (team === "Green") {
      const updatedPlayers = [...greenTeamPlayers];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        equipmentId: value,
        isValid,
      };
      setGreenTeamPlayers(updatedPlayers);
    }
  };

  const handleAddToRedTeam = () => {
    setSelectedTeam("Red");
    setShowCodeName(false);
    handleSubmitPlayer();
  };

  const handleAddToGreenTeam = () => {
    setSelectedTeam("Green");
    setShowCodeName(false);
    handleSubmitPlayer();
  };

  const setEquipmentID = (index, value, team) => {
    if (!value || !/^\d+$/.test(value)) {
      console.log("Invalid equipment ID");
      setEquipmentId("");
      return;
    }

    const updatedPlayers =
      team === "Red" ? [...redTeamPlayers] : [...greenTeamPlayers];

    updatedPlayers[index] = {
      ...updatedPlayers[index],
      equipmentId: value,
    };

    if (team === "Red") {
      setRedTeamPlayers(updatedPlayers);
    } else if (team === "Green") {
      setGreenTeamPlayers(updatedPlayers);
    }

    setEquipmentId("");
  };

  const handleClearGame = () => {
    setRedTeamPlayers(
      Array.from(Array(20).keys()).map(() => ({
        codename: "",
        playerID: "",
        equipmentId: "",
      }))
    );
    setGreenTeamPlayers(
      Array.from(Array(20).keys()).map(() => ({
        codename: "",
        playerID: "",
        equipmentId: "",
      }))
    );
    setRedTeamIndex(0);
    setGreenTeamIndex(0);
  };

  const handleSubmitPlayer = async () => {
    setAddButtonDisabled(true);
    if (!playerID || !codename) {
      console.log("Invalid player");
      return;
    }
    const newPlayer = { playerID, codename };
    if (selectedTeam === "Red") {
      if (redteamindex !== -1) {
        const updatedRedTeamPlayers = [...redTeamPlayers];
        updatedRedTeamPlayers[redteamindex] = newPlayer; // Update existing player
        setRedTeamPlayers(updatedRedTeamPlayers);
        setRedTeamIndex(redteamindex + 1);
      } else {
        console.log("Player not found in the Red Team");
      }
    } else if (selectedTeam === "Green") {
      if (greenteamindex !== -1) {
        const updatedGreenTeamPlayers = [...greenTeamPlayers];
        updatedGreenTeamPlayers[greenteamindex] = newPlayer; // Update existing player
        setGreenTeamPlayers(updatedGreenTeamPlayers);
        setGreenTeamIndex(greenteamindex + 1);
      } else {
        console.log("Player not found in the Green Team");
      }
    }

    // Clear input fields after submission
    setPlayerID("");
    setCodename("");
  };

  const updateCodeName = async (playerID) => {
    if (!playerID) {
      return;
    }
    try {
      const existingCodename = await fetchCodename(playerID);
      setCodename(existingCodename);
      //setShowCodeName(!!existingCodename); // Set showCodeName based on whether codename exists
    } catch (error) {
      console.log("Error fetching codename: ", error);
      //setCodename(''); // Reset codename if there's an error
      //setShowCodeName(false); // Hide the codename input if there's an error
    }
  };

  const handleSubmit = async () => {
    const players = [...redTeamPlayers, ...greenTeamPlayers];

    const filteredPlayers = players.filter(
      (player) => player.playerID !== "" && player.codename !== ""
    );

    filteredPlayers.forEach(async (player) => {
      await addPlayer(player.playerID, player.codename);
    });

    filteredPlayers.forEach((player) => {
      if (player.equipmentId) {
        if (player.team === "Red") {
          setEquipmentID(redteamindex, player.equipmentId, "Red");
        } else if (player.team === "Green") {
          setEquipmentID(greenteamindex, player.equipmentId, "Green");
        }
      }
    });

    console.log(filteredPlayers);
  };

  return (
    <div className="window">
      <div className="window-header">
        <h2>Game Setup</h2>
      </div>
      <div className="window-content">
        <div>
          <h3> Add Player</h3>
          <div className="player-input">
            <input
              type="number"
              value={playerID}
              onChange={(e) => {
                setPlayerID(e.target.value);
                setAddButtonDisabled(true);
                // setShowCodeName(false);
              }}
              placeholder="Player ID"
            />
            <span
              className="magnify-icon"
              onClick={() => {
                fetchCodename(playerID);
              }}
            >
              <img
                src="../src/assets/magnifying_glass_icon.png"
                alt="Search"
                className="magnifying-glass-icon"
              />
            </span>
          </div>
          {playerID && showCodeName && (
            <div className="player-input">
              <input
                type="text"
                value={codename}
                // readOnly={showCodeName && codename !== ''}
                onChange={(e) => setCodename(e.target.value)}
                placeholder="Enter Codename"
                style={{
                  backgroundColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
                  borderColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
                }}
              />
            </div>
          )}
          <div className="add-button-container">
            <button
              id="add-red-team"
              onClick={handleAddToRedTeam}
              disabled={isAddButtonDisabled}
              style={{
                backgroundColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
              }}
            >
              Add to Red Team
            </button>
            <button
              id="add-green-team"
              onClick={handleAddToGreenTeam}
              disabled={isAddButtonDisabled}
              style={{
                backgroundColor: isAddButtonDisabled ? "#aaa" : "#f9f9f9",
              }}
            >
              Add to Green Team
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h3 style={{ color: "red" }}>Red Team</h3>
            {redTeamPlayers.map((player, index) => (
              <div key={index}>
                <input
                  id="playerID"
                  type="number"
                  value={player.playerID}
                  readOnly
                  //onChange={(e) => handleRedTeamChange(index, 'playerID', e.target.value)}
                  placeholder="ID Number"
                  disabled
                />
                <input
                  id="codename"
                  type="text"
                  value={player.codename}
                  readOnly
                  // onChange={(e) => handleRedTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                  disabled
                />
                <input
                  id="equipmentId"
                  type="text"
                  value={player.equipmentId}
                  onChange={(e) => handleEquipmentIdChange(e, "Red", index)}
                  onBlur={(e) => handleBlur(e, "Red", index)}
                  placeholder="Equipment ID"
                  style={{ borderColor: getBorderColor(player) }}
                />
              </div>
            ))}
          </div>
          <div className="column">
            <h3 style={{ color: "green" }}>Green Team</h3>
            {greenTeamPlayers.map((player, index) => (
              <div key={index}>
                <input
                  id="playerID"
                  type="number"
                  value={player.playerID}
                  readOnly
                  //onChange={(e) => handleGreenTeamChange(index, 'playerID', e.target.value)}
                  placeholder="ID Number"
                  disabled
                />
                <input
                  id="codename"
                  type="text"
                  value={player.codename}
                  readOnly
                  //onChange={(e) => handleGreenTeamChange(index, 'codename', e.target.value)}
                  placeholder="Codename"
                  disabled
                />
                <input
                  id="equipmentId"
                  type="text"
                  value={player.equipmentId}
                  onChange={(e) => handleEquipmentIdChange(e, "Green", index)}
                  onBlur={(e) => handleBlur(e, "Green", index)}
                  placeholder="Equipment ID"
                  style={{ borderColor: getBorderColor(player) }}
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
